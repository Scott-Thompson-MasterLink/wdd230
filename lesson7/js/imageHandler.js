const imagesToLoad = document.querySelectorAll("[data-src]");



const options = {
    threshold: 0,
    rootMargin: '0px 0px -300px 0px'
}

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {
//         image.removeAttribute('data-src');
//     };
// };


function preLoad(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return; 
    }
    img.src = src; 
    img.onload = () => {
        img.removeAttribute('data-src');
    };
}

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            preLoad(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, options);


imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});






// const images = document.querySelectorAll("[data-src]");

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if (!src) {
//         return;
//     }

//     img.src = src;
//     img.onload = () => {
//         img.removeAttribute('data-src');
//     };
// };

// const imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px -300px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target)
//         }
//     })
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image);
// });