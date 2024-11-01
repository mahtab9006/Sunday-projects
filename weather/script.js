
const apikey = 'f6abc96b796c8ce424f719af6b41cf4d';
document.getElementById('search').addEventListener('click', () => {
    const city = document.getElementById('input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                switch (data.weather[0].description) {
                    case "broken clouds":
                        document.getElementById('body').style.backgroundImage = "linear-gradient(rgb(131, 129, 129),rgb(219, 218, 218))";

                        break;
                    default:
                        document.getElementById('body').style.backgroundImage = " linear-gradient(#096dd8,#8cbdf1)";
                        document.getElementById('windicator').style.display = 'block';
                        document.getElementById('windicator').setAttribute("src", "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_1280.png");
                }

                document.getElementById('city').textContent = data.name;
                document.getElementById('temp').textContent = data.main.temp;
                document.getElementById('feels').textContent = data.main.feels_like;
                document.getElementById('wind').textContent = data.wind.speed;
                document.getElementById('desc').textContent = data.weather[0].description;
                if (Array.isArray(data.list)) {
                    const forecasts = data.list;
                    forecasts.forEach(forecast => {

                        document.getElementById('cast-date' + 1).textContent = forecast.dt_txt;
                        document.getElementById('cast-temp' + 1).textContent = forecast.mai.temp;
                        document.getElementById('cast-desc' + 1).textContent = forecast.weather[0].description;


                    });
                }
                else {
                    console.error("forecast data is not available");
                }
            }
            else {
                alert('please Enter a valid city');
            }
        })
});
