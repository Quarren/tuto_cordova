// initialisation de l'app
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // error : Battery not supported
    window.addEventListener("batterystatus", onBatteryStatus, false);
    window.addEventListener("batterylow", onBatteryLow, false);
    window.addEventListener("batterycritical", onBatteryCritical, false);
    
    /*
    window.addEventListener("batterystatus", function(info) {
        console.log("[batterystatus event] Level: " + info.level + " isPlugged: " + info.isPlugged);
    }, false);

    window.addEventListener("batterylow", function(info) {
        console.log("[batterylow event] Level: " + info.level);
    }, false);*/
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
    var OpenWeatherAppKey = "enter api key here";
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
// Fonctionne sur Chrome mais pas sur Firefox

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    window.alert("battery level: " + status.level + '%' + " isPlugged: " + status.isPlugged);
};

function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
};

function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
};


// Début du code pour le plugin camera

var renderPic = function(data) {
	var image = document.getElementById('myImage');
	image.src = "data:image/jpeg;base64," + data;		
};

var cameraError = function(err) {
	console.log('[camera error]',err);	
};


document.querySelector('#testCameraExisting').addEventListener('click', function() {
	navigator.camera.getPicture(renderPic, cameraError, {
		sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
		destinationType:Camera.DestinationType.DATA_URL
	});
});

document.querySelector('#testCameraNew').addEventListener('click', function() {
	navigator.camera.getPicture(renderPic, cameraError, {
		sourceType:Camera.PictureSourceType.CAMERA,
		destinationType:Camera.DestinationType.DATA_URL
	});
});


// Début du code pour le plugin in app browser

document.querySelector('#testIAB').addEventListener('click', function() {
	iabRef = cordova.InAppBrowser.open('https://www.univ-grenoble-alpes.fr/','_blank','location=yes');
});

