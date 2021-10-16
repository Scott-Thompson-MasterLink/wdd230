document.querySelector(".copyrightyear").textContent = new Date().getFullYear();

const today = new Date();
const options = { weekday: 'long', day: 'numeric' , month: 'long', year: 'numeric'};
document.querySelector(".todayDate").textContent = today.toLocaleDateString(undefined, options)