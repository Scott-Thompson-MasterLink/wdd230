const businessList = [
    {   "name":"Vantage Controls",
        "businessType":"Electronic Manufacturing",
        "address": "595S 1325W, Orem, UT 84058",
        "phone": "801-788-3864",
        "website": "https://www.legrand.us/vantage",
        "logo": "images/legrand-logo.webp"}
    ,
    {   "name":"Apple Spice Junction",
        "businessType":"Restaurant/Bakery",
        "address": "422W 800N, Orem, UT 84057",
        "phone": "(801) 224-4666",
        "website": "https://www.applespice.com/",
        "logo": "images/asj-logo-opt.webp"}
    ,
    {   "name":"SCERA Center for the Arts",
        "businessType":"Entertainment",
        "address": "745 South State Street, Orem, UT 84058",
        "phone": "(801) 225-2787",
        "website": "https://scera.org/",
        "logo": "images/scera-logo.webp"}
    ,
    {   "name":"InfoTrax Systems",
        "businessType":"Computers/Internet",
        "address": "1875S State St. Suite 3000, Orem, UT 84097",
        "phone": "(801) 431-4900",
        "website": "https://www.infotraxsys.com/",
        "logo": "images/infotrax.webp"}
    ,
    {   "name":"Monarch Power Sports",
        "businessType":"Recreation",
        "address": "350 West 800 North, Orem, Utah 84057",
        "phone": "(885) 988-7000",
        "website": "https://www.monarchpowersports.com/",
        "logo": "images/monarchpowersports-logo.webp"
    },
    {   "name":"Dory Cleaning Services",
        "businessType":"Cleaning",
        "address": "534N 700E, Orem, UT 84097",
        "phone": "(530) 957-0437",
        "website": "N/A",
        "logo": "images/none.webp"
    },
    {   "name":"Sound Corrections Chiropractic, PLLC",
        "businessType":"Health",
        "address": "246 N Orem BLVD Orem UT 84057",
        "phone": "(801) 900-3223",
        "website": "https://www.soundcorrections.com/",
        "logo": "images/sc-logo.webp"
    }


];



businessList.forEach(business => {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let businessType = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a')
    let img = document.createElement('img');

    card.classList.add('contain');
    h2.classList.add('show');
    businessType.classList.add('show');
    phone.classList.add('show');
    address.classList.add('card');
    website.classList.add('card');
    img.classList.add('card');

    h2.innerHTML = `${business.name}`;
    businessType.innerHTML = `${business.businessType}`;
    address.innerHTML = `Address: ${business.address}`
    phone.innerHTML = `Phone: ${business.phone}`
    website.setAttribute('src', business.website);
    website.innerHTML = `${business.website}`
    img.setAttribute('src', business.logo);
    img.alt = `${business.name} logo`

    card.appendChild(h2);
    card.appendChild(businessType);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(img);
    // card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);

});
