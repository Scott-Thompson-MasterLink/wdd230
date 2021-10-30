const imagesToLoad = document.querySelectorAll('img[data-src]')


function preLoad(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return; 
    }
    img.src = src; 
}

const options = {
    threshold: 0,
    rootMargin: '0px 0px 600px 0px'
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};




if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                preLoad(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

imagesToLoad.forEach((img) => {
    loadImages(img);
});