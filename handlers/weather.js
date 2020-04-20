const weather = require('openweather-apis')
module.exports = async (ctx) => {
weather.setLang('ru');
 weather.setCity('Moscow');
weather.setAPPID(process.env.OWM_KEY);
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
