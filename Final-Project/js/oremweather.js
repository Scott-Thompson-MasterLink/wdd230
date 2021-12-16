const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.297161&lon=-111.695034&units=imperial&exclude=hourly&appid=f94cb0d100da673c530bf7a203b492ae"

fetch(apiURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {

    document.querySelector(".temp").textContent = jsonObject["current"].temp;
    document.querySelector(".humidity").textContent = jsonObject["current"].humidity;
    document.querySelector(".description").textContent = jsonObject["current"].weather["0"].description;
    // document.querySelector(".box_icon").setAttribute("alt", jsonObject.weather["0"].description);


    if (jsonObject["alerts"] == null || jsonObject["alerts"] == ''){
 
    }
    else{
        const alertList = jsonObject["alerts"];
        const alert = document.querySelector(".alert")
        const p = document.createElement("p");
        const alertBtn = document.createElement('button');
        const alertItem = document.createElement('div');
    
    
        p.innerHTML = alertList.description;
        alertBtn.textContent = 'Close';
        
        alertItem.appendChild(p);
        alertItem.appendChild(alertBtn);
        alert.appendChild(alertItem);
    
        alertBtn.onclick = function(e) {
            alert.removeChild(alertItem);
        }        
    };
    
    const daysOWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days = jsonObject["daily"];
    let date = new Date().getDay();
    
    let day = 0;
    for (let i = 0; i < 3; i++) {
        document.querySelector(`.day${day + 1}`).textContent = daysOWeek[date + day + 1];
        document.querySelector(`.temp${day + 1}`).textContent = `${days[day].temp["day"]}°F`;
        day++;
      }

});
