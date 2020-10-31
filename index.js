import 'dotenv/config.js';
import {bot} from './bot.js';
import Stage from 'telegraf/stage.js'
import session from 'telegraf/session.js'
import {handleWeather} from './handlers/index.js';
const stage = new Stage([handleWeather])
bot.use(session())
bot.use(stage.middleware())
bot.command('weather', (ctx) => ctx.scene.enter('WeatherScene'));
bot.launch();
