const weather = require('openweather-apis')
module.exports = async (ctx) => {
weather.setLang('ru');
 weather.setCity('Moscow');
weather.setAPPID(process.env.OWM_KEY);
await weather.getAllWeather(function(err, JSONObj){
       console.log(JSONObj) //sendWeather(JSONObj)
//ctx.reply(JSONObj)
    });
}
