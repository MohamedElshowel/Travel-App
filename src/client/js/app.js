/**
 * @description Generate weather journal based on the zip code from user input.
 */
const generateWeatherJournal = async () => {
    let location = document.getElementById('location')?.value?.replace(/\s+/g, '');
    // let departureDate = document.getElementById('date').value;

    if (!location) {
        alert('Please enter a valid city name');
    } else {
        const weatherData = await getWeatherData(`/getData?location=${location}`, true);
        console.log(weatherData);
    }

}

/**
 * @description Async function to get the weather data for a specific city from OpenWeatherMap.org
 * @param {string} serviceUrl
 */
const getWeatherData = async (serviceUrl = '') => {
    const baseUrl = 'http://localhost:8081';
    const response = await fetch(baseUrl + serviceUrl);

    try {
        const data = await response.json();
        if (response.status === 200)    // "OK" (response has no errors)
            return data;
        else
            throw data;                 // throw an exception with the response error
    } catch (error) {
        console.log('error', error);
        alert(`Error (${error.cod}): ${error.message}!`);
    }
}


/**
 * @description Update User Interface with the latest updated data for the current zip code.
 * @param {string | number} zipCode - Entered zip code from the user input
 * TODO: To be re-implemented
 */
const updateUI = async (zipCode) => {
    const data = await response.json();
    const updatedData = data[zipCode];
    // Update UI with latest weather info
    document.querySelector('.entry .title').textContent = `Most Recent Entry for Zip Code (${zipCode}):`;
    document.getElementById('date').innerHTML = '<b>Date: </b>' + updatedData.date;
    document.getElementById('temp').innerHTML = '<b>Temperature: </b>' + Math.round(updatedData.temperature) + '°C';
    let feelingElement = document.getElementById('content');
    if (updatedData.userResponse) {
        feelingElement.innerHTML = '<b>Feelings: </b>' + updatedData.userResponse;
        feelingElement.style.display = 'block';
    } else {
        feelingElement.style.display = 'none';
    }

    // Show weather data and hide the placeholder image
    document.getElementById('dataPlaceholder').style.display = 'none';
    document.getElementById('retrievedData').style.display = 'block';

    resetInputFields();
}

/**
 * @description Reset HTML input fields to be ready for the next input.
 */
const resetInputFields = () => {
    document.getElementById('location').value = '';
    document.getElementById('date').value = '';
}

export {
    generateWeatherJournal
}