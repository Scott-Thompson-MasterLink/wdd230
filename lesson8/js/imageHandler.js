


// const options = {
//     threshold: 0,
//     rootMargin: '0px 0px 200px 0px'
// }

const imagesToLoad = document.querySelectorAll("img[data-src]")


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


