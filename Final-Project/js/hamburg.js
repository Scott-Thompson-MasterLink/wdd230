const hambutton = document.querySelector('.ham');
const active = document.querySelector('.active').textContent;
const menuItem = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menuItem.innerHTML = `${active}`;

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);



document.querySelector(".copyrightyear").textContent = new Date().getFullYear();
document.querySelector(".modifiedlast").textContent = new Date(document.lastModified);