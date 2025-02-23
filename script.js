async function fetchWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiId = config.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("weather").textContent = data.weather[0].description;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("weather-info").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data");
    }
}
