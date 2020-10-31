import weather from 'openweather-apis';
import Composer from 'telegraf/composer.js';
import WizardScene from 'telegraf/scenes/wizard/index.js';
const checkCity = new Composer();
export const handleWeather = new WizardScene('WeatherScene', async (ctx) => {
  ctx.reply('В каком городе вы находитесь?');
  return ctx.wizard.next();
},
checkCity, (ctx) => {
  return ctx.scene.leave();
});

checkCity.on('message', async (ctx) => {
  const city = await ctx.message.text;
  weather.setCity(city);
  weather.setLang('ru');
  weather.setAPPID(process.env.OWM_KEY);
  weather.getAllWeather(function(err, JSONObj) {
    console.log(JSONObj); // sendWeather(JSONObj)
    ctx.reply(`Погода в ${JSONObj.name}
Температура: ${JSONObj.main.temp} °C
Ощущается как: ${JSONObj.main.feels_like} °C
Скорость ветра: ${JSONObj.wind.speed} м/с
Давление: ${JSONObj.main.pressure} мм рт.
Влажность: ${JSONObj.main.humidity}%`);
  });
  return ctx.wizard.next();
});
