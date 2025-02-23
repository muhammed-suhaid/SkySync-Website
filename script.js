async function fetchWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
      alert("Please enter a city name");
      return;
    }
  
    const apiId = config.API_KEY; // Access the API key from config.js
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Update the first container (Temperature, Weather, Feels like)
      document.getElementById("temperature").textContent = data.main.temp;
      document.getElementById("weather").textContent = data.weather[0].description;
      document.getElementById("feels-like").textContent = data.main.feels_like;
  
      // Update the second container (High/Low, Humidity, Wind Speed)
      document.getElementById("temp-high").textContent = data.main.temp_max;
      document.getElementById("temp-low").textContent = data.main.temp_min;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;
  
      // Show the wrapper containing both containers
      document.getElementById("weather-wrapper").style.display = "flex";
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data");
    }
  }
  