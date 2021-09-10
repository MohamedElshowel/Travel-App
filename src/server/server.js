var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const workboxBuild = require('workbox-build');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.static('dist'));

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const buildServiceWorker = () => {
  // This will return a Promise
  return workboxBuild.generateSW({
    globDirectory: 'dist',
    globPatterns: [
      '**/*.{html,json,js,css}',
    ],
    swDest: 'dist/service-worker.js',
  });
};

app.get('/', (req, res) => {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log('✅ Travel app server listening on port 8081!')
})


app.get('/getData', async (req, res) => {

  buildServiceWorker();

  try {
    const response = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${req.query.city}&maxRows=${1}&username=${process.env.GEONAMES_USERNAME || 'demo'}`);
    const responseObj = await response.json();
    if (responseObj?.postalCodes?.length) {
      const weatherParams = { days: +req.query.days };
      if (responseObj.postalCodes[0]) {
        weatherParams.locationData = responseObj.postalCodes[0];
      } else {
        weatherParams.cityName = req.query.city;
      }
      const weatherForecast = await getWeatherForecast(weatherParams);
      const locationImage = await getLocationImage(req.query.city);

      res.send({
        weather: weatherForecast,
        image: locationImage,
      });
    }
  } catch (error) {
    res.send({ error });
    console.log('error', error);
  }
});

const getWeatherForecast = async ({ locationData, cityName, days }) => {
  const locationQuery = locationData ? `lat=${locationData.lat}&lon=${locationData.lng}` : `city=${cityName}`;
  const response = await fetch(`http://api.weatherbit.io/v2.0/forecast/daily?${locationQuery}&days=${days + 1}&key=${process.env.WEATHERBIT_API_KEY}`);
  const responseObj = await response.json();
  return responseObj;
}

const getLocationImage = async (locationName) => {
  const response = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${locationName}&image_type=photo&pretty=true&safesearch=true`);
  try {
    const responseObj = await response.json();
    return responseObj;
  } catch (error) {
    console.log(error);
    return null;
  }
}
