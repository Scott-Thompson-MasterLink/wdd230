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



