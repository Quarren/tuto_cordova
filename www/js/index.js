document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


//navigator.geolocation.getCurrentPosition(geolocationSuccess, [geolocationError], [geolocationOptions]);
/*
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};*/

// onError Callback receives a PositionError object
/*
function onError(error) {
    alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}*/

//navigator.geolocation.getCurrentPosition(onSuccess, onError);


function getWeatherLocation() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;
            getWeather(Latitude, Longitude);
        }
    );
}

/*
// Success callback for get geo coordinates
var onWeatherSuccess = function (position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    getWeather(Latitude, Longitude);
};*/


// Get weather by using coordinates
function getWeather(latitude, longitude) {
    // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "862214dafbb83dc2e46db490e7bc9efb";
    var queryString = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';
    $.getJSON(queryString, function (results) {
        if (results.weather.length) {

            $.getJSON(queryString, function (results) {

                if (results.weather.length) {

                    $('#description').text(results.name);
                    $('#temp-max').text(results.main.temp);
                    $('#temp-min').text(results.main.temp_min);
                    $('#temp-feels').text(results.main.feels_like);
                    $('#wind').text(results.wind.speed);
                    $('#humidity').text(results.main.humidity);
                    $('#visibility').text(results.weather[0].main);

                    console.log(results);
                }
            });
        }
    }).fail(function () {
        console.log("error getting location");
    });
}

// envoyer l'erreur sur la console
function onWeatherError(error) {
    console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}


/*
var btn = document.getElementById('get-weather');
btn.addEventListener('click', function() {
    getWeatherLocation();
    console.log("et z'estbarti")
})
*/