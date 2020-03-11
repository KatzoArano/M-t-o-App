const {Weather} = require('./Weather');
require('./index.css');

const weather = new Weather('Briscous', 'fr');

async function fetchWeather(){
const data = await weather.getWeather();
console.log(data)
}

document.addEventListener('DOMContentLoaded', fetchWeather());