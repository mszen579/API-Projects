
var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=Rotterdam&appid=9e7ae9352c76a7de3c6fe107528497ca';

$.getJSON(apiCall, weatherCallback);

function weatherCallback(weatherData){
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var description = weatherData.weather[0].description;
  $('.weatherResponse').append("The Weather in " + cityName + " " + country + " is currently" + description);
}
