// initialisation de l'app
document.addEventListener('deviceready', onDeviceReady, false);

// Les fonctions appelées dans onDeviceReady seront appelées dès que l'application est prête
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
	
	
	// TODO
	/*
	Ajouter 3 eventListener sur l'objet window pour les propriétés suivantes :
	batterystatus
	batterylow
	batterycritical
	*/
    window.addEventListener("batterystatus", onBatteryStatus, false);
    window.addEventListener("batterylow", onBatteryLow, false);
    window.addEventListener("batterycritical", onBatteryCritical, false);
}

// Début du code pour le plugin geolocation

/*
TODO: ajouter le plugin geolocation, obtenir un objet Position avec la propriété getCurrentPosition()
et appeler getWeather en passant les latitude et longitude de la Position en paramètres
*/
function getWeatherLocation() {

}

/*
Effectue une requête sur l'API Weather en utilisant les latitude et longitude,
pour obtenir celles-ci vous devez compéleter la fonction getWeatherLocation.
*/
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

// TODO: créer un bouton dans index.html, récupérer son id et la passer dans le querySelector() ci-dessous
document.querySelector(/*TODO*/).addEventListener('click', function() {
	navigator.camera.getPicture(renderPic, cameraError, {
		sourceType:Camera.PictureSourceType.CAMERA,
		destinationType:Camera.DestinationType.DATA_URL
	});
});


// Début du code pour le plugin in app browser

// TODO: créer un bouton dans index.html, passer son id dans le querySelector() ci-dessous
// passez l'url de votre choix
document.querySelector('#testIAB').addEventListener('click', function() {
	iabRef = cordova.InAppBrowser.open(/*TODO*/,'_blank','location=yes');
});

