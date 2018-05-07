const request = require('request');

let getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.forecast.io/forecast/ffcac90db1084571e1286a9483a46361/${lat},${lng}`,
        json: true
    },(error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else {
            callback("Unable to fetch weather.");
        }
    });
};

module.exports.getWeather = getWeather;