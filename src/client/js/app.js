/**
 * @description Generate weather journal based on the zip code from user input.
 */
const generateWeatherJournal = async () => {
    // reset pre-loaded data
    resetPlaceholders();

    let location = document.getElementById('location')?.value?.replace(/\s+/g, '');
    let departureDate = document.getElementById('datePicker').value;
    let daysCount = Math.ceil((Date.parse(departureDate) - new Date()) / (1000 * 60 * 60 * 24));

    if (!location) {
        alert('Please enter the destination city name');
    } else if (!departureDate) {
        alert('Please enter a valid departure date');
    } else {
        const allData = await getWeatherData(`/getData?city=${location}&days=${daysCount}`, true);
        console.log(allData);
        displayData({
          images: allData?.image?.hits,
          weatherData: allData?.weather?.data,
          cityName: allData?.weather?.city_name,
        });
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
 * @description Display the loaded data of weather and location image in the UI.
 * @param {object} params
 * @param {Array} params.images
 * @param {object} params.weatherData
 * @param {string} params.cityName
 */
const displayData = ({ images, weatherData, cityName }) => {
    if (weatherData) {
        const selectedDate = new Date(document.getElementById('datePicker').value).toISOString().slice(0, 10);
        const selectedDayWeather = weatherData.find(day => day.datetime === selectedDate) || weatherData.pop();
        document.getElementById('weather-title').innerHTML = `The typical weather condition in ${cityName} <br/> on ${selectedDate} is:`;
        document.getElementById('weather-temp').innerHTML = `<b>High: </b>${selectedDayWeather.high_temp}°C, &nbsp; <b>Low: </b>${selectedDayWeather.low_temp}°C`;
        document.getElementById('weather-description').innerHTML = `${selectedDayWeather.weather.description} throughout the day.`;
        document.getElementById('weather-icon').style.backgroundImage = `url(https://www.weatherbit.io/static/img/icons/${selectedDayWeather.weather.icon}.png)`;
        // Show weather data and hide the placeholder image
        document.getElementById('weather-placeholder').style.display = 'none';
        document.getElementById('weather-data').style.display = 'grid';
    }

    if (images?.length) {
        const randomImageIndex = Math.floor(Math.random() * images.length);
        document.getElementById('location-image').src = images[randomImageIndex].webformatURL;
        // Hide the placeholder image
        document.getElementById('location-placeholder').style.display = 'none';
        document.getElementById('location-image').style.display = 'block';
    }
}

/**
 * @description Reset placeholder images till the new data is loaded.
 */
const resetPlaceholders = () => {
    document.getElementById('weather-placeholder').style.display = 'block';
    document.getElementById('weather-data').style.display = 'none';
    document.getElementById('location-placeholder').style.display = 'block';
    document.getElementById('location-image').style.display = 'none';
}

export {
    generateWeatherJournal
}