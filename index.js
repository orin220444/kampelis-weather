require('dotenv').config({path: './.env'});
//const Telegraf = require('telegraf');
const bot = require('./bot')
//const bot = new Telegraf(process.env.BOT_TOKEN);
const {handleWeather} = require('./handlers')
bot.command('weather', handleWeather)
console.log(handleWeather)
bot.launch()
