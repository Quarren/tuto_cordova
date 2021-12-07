# tuto_cordova

<h1>1) Geolocalisation</h1>

<br>Installer le plugin gelocation : cordova plugin add cordova-plugin-geolocation

<br>Dans index.js, créer la fonction getWeatherLocation() qui fait appel aux méthodes du plugin :
navigator.gelocation.getCurrentPosition() // renvoie un objet Position avec les propriétés suivantes : coords.latitude et coords.longitude
Appeler la méthode getWeather(latitude, longitude) qui prend comme paramètres les latitude et longitude que vous venez de récupérer.

<br>Avant de tester, remplacer le placeholder par la clef de l'API Weather suivante : 

<br>Pour tester, exécutez la commande 'cordova run browser' et cliquez sur le bouton 'obtenir la météo', qui devrait automatiquement renvoyer la météo à St-Martin-d'Hères.

<h1>2) Battery status</h1>
<br>Installer le plugin battery-status : cordova plugin add cordova-plugin-battery-status

<br>A la fin de la fonction onDeviceReady(), ajouter 3 eventListener sur l'objet window avec les paramètres suivants :
<br>"batterystatus
