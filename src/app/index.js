const {Weather} = require('./Weather');
const {Ui} = require('./Ui');

require('./index.css');

const ui = new Ui();
const weather = new Weather('Briscous', 'fr');

async function fetchWeather(){
const data = await weather.getWeather();
ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather());