const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a6dd965c7msh9443d387d4fb1c1p165367jsn541f7b9a28e1',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
    const url = 'https://open-weather13.p.rapidapi.com/city'
    const newURL =`${url}/${city}`
    const weatherPromise =  fetch(newURL, options)
    const response = await weatherPromise;
    return await response.json();
}
 
/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city).then((res)=>{
    showWeatherData(res);
  }).catch((error) =>{
    console.log(error);
    console.log("something happened");
  });
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  /* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

 document.getElementById('city-name').innerText = weatherData.name;
 document.getElementById('weather-type').innerText = weatherData.weather[0].main;
 document.getElementById('temp').innerText = (weatherData.main.temp -32) *5/9;
 document.getElementById('min-temp').innerText = (weatherData.main.temp_min -32) *5/9;
 document.getElementById('max-temp').innerText = (weatherData.main.temp_max -32) *5/9;
  
}

