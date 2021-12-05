// initialisation de l'app
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// Début du code pour le plugin geolocation

function getWeatherLocation() {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            Latitude = position.coords.latitude;
            Longitude = position.coords.longitude;
            getWeather(Latitude, Longitude);
        }
    );
}

// Get weather by using coordinates
function getWeather(latitude, longitude) {
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

// Début du code pour le plugin battery-status



// Début du code pour le plugin camera

// Début du code pour le plugin file