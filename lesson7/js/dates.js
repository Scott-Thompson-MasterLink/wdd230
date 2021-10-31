document.querySelector(".copyrightyear").textContent = new Date().getFullYear();

const today = new Date();
const options = { weekday: 'long', day: 'numeric' , month: 'long', year: 'numeric'};
document.querySelector(".todayDate").textContent = today.toLocaleDateString(undefined, options)


const pancake_banner = document.querySelector('.pancake_banner')
console.log(today.day)
if (today.getDay() == 5){
    pancake_banner.style.display = "block";
}
else{
    pancake_banner.style.display = "none";
};

const milliToDays = 86400000;

const lastVisit = document.querySelector('.last-visit');

let lastDate = parseInt(localStorage.getItem("lastVisit")) || Date.now();




const currentDate = Date.now();

lastVisit.textContent = Math.round((currentDate - lastDate) / milliToDays);




let storeDate = () =>{
    
    
}
const current = Date.now();
localStorage.setItem("lastVisit", JSON.stringify(current));