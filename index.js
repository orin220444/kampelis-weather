import 'dotenv/config.js'
import {bot} from './bot.js'
import {handleWeather} from './handlers/index.js';
bot.command('weather', handleWeather);
console.log(handleWeather);
bot.launch();
