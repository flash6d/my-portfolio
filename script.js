// ===== SELECT ELEMENTS =====
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");

// ===== YOUR API KEY =====
const apiKey = "be470911a1d223aa133f8b3e591069d6";

// ===== EVENT LISTENER =====
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather();
});

// ===== FETCH WEATHER FUNCTION =====
function getWeather() {
  const city = cityInput.value.trim();
  if (city === "") return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      cityName.textContent = `${data.name}, ${data.sys.country}`;
      temperature.textContent = `${Math.round(data.main.temp)} °C`;
      condition.textContent = data.weather[0].main;

      // Add smooth effect
      document.querySelector(".weather-info").style.opacity = "1";
    })
    .catch((error) => {
      cityName.textContent = "City not found 😕";
      temperature.textContent = "-- °C";
      condition.textContent = "--";
    });

  cityInput.value = "";
}
