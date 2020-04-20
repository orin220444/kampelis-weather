const weather = require('openweather-apis')
const bot = require('../bot')
module.exports = async (ctx) => {
weather.setLang('ru');
weather.setAPPID(process.env.OWM_KEY);
ctx.reply('В каком городе вы находитесь?')
await getCity(ctx)
console.log(city)
weather.setCity(city);
getWeather(city, ctx)

async function getWeather(city, ctx){
await weather.getAllWeather(function(err, JSONObj){
       console.log(JSONObj) //sendWeather(JSONObj)
ctx.reply(`Погода в ${JSONObj.name}
Температура: ${JSONObj.main.temp} °C
Ощущается как: ${JSONObj.main.feels_like} °C
Скорость ветра: ${JSONObj.wind.speed} м/с
Давление: ${JSONObj.main.pressure} мм рт.
Влажность: ${JSONObj.main.humidity}%`)
    });
}
}
async function getCity(ctx){
bot.on('message', async (ctx) => {
const city = await ctx.message.text
console.log(city)
return city
})
}
