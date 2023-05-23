let weather = {    //let the promise be weather
   apiKey: "4b65d4363aca0867770344bb82a378a2",  // api key from OpenWeatherAPI
   fetchWeather: function (city) {   //function to fetch weather data from API url
     fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" +
         city +
         "&units=metric&appid=" +   //url from OpenWeatherAPI
         this.apiKey
     )
       .then((response) => {
         if (!response.ok) {
           alert("No weather found.");  //show alert when wrong city is searched
           throw new Error("No weather found.");  //throw alert when searched city;s data not found
         }
         return response.json();  //parse a response from JSON
       })
       .then((data) => this.displayWeather(data)); //pass te data to displayWeather function
   },
   displayWeather: function (data) {  //function for displaying the weather data
     const { name } = data; //show name of the city from the data
     const { icon, description } = data.weather[0]; //show icon and description of the weather from the weather data
     const { temp, humidity } = data.main; //show temperature and humidity of the city from the data
     const { speed } = data.wind; //show the wind speed within the city fro the data
     document.querySelector(".city").innerText = "Weather in " + name; //display searched city in this pattern
     document.querySelector(".icon").src =
       "https://openweathermap.org/img/wn/" + icon + ".png"; //show icon for climate
     document.querySelector(".description").innerText = description; //show decription in words with icon  
     document.querySelector(".temp").innerText = temp + "°C"; //show temperature in degrees
	 document.querySelector(".humidity").innerText =
       "Humidity: " + humidity + "%"; //show humidity in %
     document.querySelector(".wind").innerText =
       "Wind speed: " + speed + " km/h"; //show wind speed in km/h
     document.querySelector(".weather").classList.remove("loading");
     document.body.style.backgroundImage =
       "url('https://source.unsplash.com/1600x900/?" + name + " " + "nature" + "')";  //show different background for different cities
   },

   //function for fetching weather data of the searched city 
   search: function () {
     this.fetchWeather(document.querySelector(".search-bar").value);
   },
 };
 
 //event listener for search button
 document.querySelector(".search button").addEventListener("click", function () {
   weather.search();
 });
 
 //event listener for search bar
 document
   .querySelector(".search-bar")
   .addEventListener("keyup", function (event) {
     if (event.key == "Enter") {    //enter the city name
       weather.search();            //for weather data
     }
   });
 
<<<<<<< HEAD
   //fetch the weather data of Delhi 
=======
>>>>>>> 0767f8c54722bdfc8bb908b7b9c5f839348f9600
 weather.fetchWeather("Delhi");
