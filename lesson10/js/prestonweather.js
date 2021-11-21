const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=f94cb0d100da673c530bf7a203b492ae";
const fiveURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=f94cb0d100da673c530bf7a203b492ae";
let fiveDays = null;
// let today = null;

fetch(apiURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    document.querySelector(".temperature").textContent = jsonObject["main"].temp;
    document.querySelector(".wind_speed").textContent = jsonObject["wind"].speed;
    document.querySelector(".box_icon").setAttribute("src", `http://openweathermap.org/img/wn/${jsonObject.weather["0"].icon}.png`);
    document.querySelector(".box_icon").setAttribute("alt", jsonObject.weather["0"].description);
    document.querySelector(".humidity").textContent = jsonObject["main"].humidity;

    // this is the windchill calculations
    const temperature = document.querySelector('.temperature').textContent;
    const windSpeed = document.querySelector('.wind_speed').textContent;
    const chill = document.querySelector('.wind_chill');
    
    function calculateChill(temp, speed){
    
        let f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + 0.4275 * (temp * (speed ** 0.16));
        f = Math.round(f);
        return(f);
    
    
    };
    
    
    if (temperature <= 50 && windSpeed >= 3 ){
        chill.textContent = calculateChill(temperature, windSpeed);
    
    }
    else{
        chill.textContent = 'N/A';
    };

});

fetch(fiveURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    hours = jsonObject["list"];
    const fiveDays = hours.filter(hour => hour.dt_txt.includes("18:00:00"));
    
    const daysOWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = 0;
    fiveDays.forEach(forecast => {
        let date = new Date(forecast.dt_txt);
        document.querySelector(`.day${day + 1}`).textContent = daysOWeek[date.getDay()];
        document.querySelector(`.temp${day + 1}`).textContent = `${forecast['main'].temp}°F`;
        document.querySelector(`.fimg${day + 1}`).setAttribute("src", `http://openweathermap.org/img/wn/${forecast.weather["0"].icon}.png`);
        document.querySelector(`.fimg${day + 1}`).setAttribute("alt", forecast.weather["0"].description);
        day++;
        
    });
    
});