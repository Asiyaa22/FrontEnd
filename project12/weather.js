//check if geolocation is supported in browser
if("geolocation" in navigator){
    //prompt will be send to the user to allow access the location
    //getCurrentPosition takes two arguments 
    // 1. is SuccessCallback function [if the access to location is allowed]
    // 2. is failure callBack function
    navigator.geolocation.getCurrentPosition(
    (position) => {
        // getting users latitude and longitude Coordinates
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        // Displaying data obtained
        console.log(`Latitude: ${lat}, Longitude: ${long}`);
        var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

        getJSON(GEOCODING).done(function(location) {
        console.log(location)
         })

    },
    // Failure CallBack
    (error) => {
        console.error("Error in getting users location");
    }
    );
}
else {
    console.error("Geolocation is not Supported by this browser");
}
fetch('https://api.geoapify.com/v1/ipinfo?apiKey=YOUR_API_KEY_HERE')
  .then(response => response.json())
  .then(data => {
    // You can now access the location data in the "data" object
    console.log(data);
  });
 







// Function to get weather based on GPS coordinates
// function getWeather(latitude, longitude) {
//     const apiKey = '136cdf18336128b0b98df5a997b20e02'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Log the weather data to the console
//             // You can now use this data to display weather information on your webpage
//         })
//         .catch(error => {
//             console.log('Error fetching weather data:', error);
//         });
// }

// // Function to get user's current GPS location
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             getWeather(latitude, longitude);
//         }, error => {
//             console.log('Error getting location:', error);
//         });
//     } else {
//         console.log('Geolocation is not supported by this browser.');
//     }
// }

// // Call getLocation function to start the process
// getLocation();
// console.log("get location function is executed");
