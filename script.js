const apiKey = "ce66b837fc1ad31fc471c919d901df64";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const weatherResult = document.getElementById("weatherResult");
    const errorMessage = document.getElementById("errorMessage");
    const loading = document.getElementById("loading");

    if (city === "") {
        errorMessage.innerText = "Please enter a city name";
        return;
    }

    loading.classList.remove("d-none");
    errorMessage.innerText = "";
    weatherResult.classList.add("d-none");

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        console.log("Fetching:", url);

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            throw new Error(data.message);
        }

        document.getElementById("cityName").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").innerText =
            `${Math.round(data.main.temp)}°C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `${data.wind.speed} km/h`;

        const icon = data.weather[0].icon;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

        weatherResult.classList.remove("d-none");

    } catch (error) {

        console.error(error);

        errorMessage.innerText =
            "Error: " + error.message;

    } finally {

        loading.classList.add("d-none");

    }
}

document.getElementById("cityInput")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});