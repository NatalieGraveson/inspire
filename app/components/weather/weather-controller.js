import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)

	let newweather = _weatherService.Weather
	//	newweather = -273.15
	document.getElementById("temp").innerHTML = newweather.Template



	//document.getElementById('temp').innerHTML =
	//document.getElementById('temp').innerText =
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()


	}



}
