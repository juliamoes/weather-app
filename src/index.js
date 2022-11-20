function displayWeatherCondition(response) {
  document.querySelector("#temp1").innerHTML = response.data.name;
  document.querySelector("#hot").innerHTML = Math.round(
    response.data.main.temp
  );
}

function city1(event) {
  event.preventDefault();
  let apiKey = "4ceb52be1d2505a597cef32a455231ba";
  let city = document.querySelector("#enter-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let cityForm = document.querySelector("#enter");
cityForm.addEventListener("submit", city1);

function todayIs(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let day = date.getDay();
  let dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let days = dayWeek[day];

  return `${days} ${hour}:${minute}`;
}

let now = new Date();
let currentTime = document.querySelector("#time");
currentTime.innerHTML = todayIs(now);

let apiUrl =
  "`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`";
