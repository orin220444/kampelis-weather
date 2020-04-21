require('dotenv').config({path: './.env'});
const bot = require('./bot');
const {handleWeather} = require('./handlers');
bot.command('weather', handleWeather);
console.log(handleWeather);
bot.launch();
