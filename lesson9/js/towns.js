const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let towns = null

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        towns = jsonObject["towns"];
        const relevant = towns.filter(town => (town.name === "Preston" || town.name === "Fish Haven" || town.name === "Soda Springs"));

        relevant.forEach(town => {
            if (town.name === "Preston") {
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let eventsp = document.createElement('p');
                let eventL = document.createElement('div');
                let events = town.events;



                name.innerHTML = `${town.name}`
                motto.innerHTML = `${town.motto}`
                year.innerHTML = `Year Founded: ${town.yearFounded}`
                pop.innerHTML = `Population: ${town.currentPopulation}`
                rain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`
                eventsp.innerHTML = `<strong>Coming Events<strong>`
                eventL.appendChild(eventsp);
                events.forEach(event => {
                    let text = document.createElement('p');
                    text.innerHTML = `${event}`
                    eventL.appendChild(text)
                });


                document.querySelector(".preston .text").appendChild(name);
                document.querySelector(".preston .text").appendChild(motto);
                document.querySelector(".preston .text").appendChild(year);
                document.querySelector(".preston .text").appendChild(pop);
                document.querySelector(".preston .text").appendChild(rain);
                document.querySelector(".preston .text").appendChild(eventL);

            } else if (town.name === "Soda Springs") {
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let eventsp = document.createElement('p');
                let eventL = document.createElement('div');
                let events = town.events;

                name.innerHTML = `${town.name}`
                motto.innerHTML = `${town.motto}`
                year.innerHTML = `Year Founded: ${town.yearFounded}`
                pop.innerHTML = `Population: ${town.currentPopulation}`
                rain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`
                eventsp.innerHTML = `<strong>Coming Events<strong>`
                eventL.appendChild(eventsp);
                events.forEach(event => {
                    let text = document.createElement('p');
                    text.innerHTML = `${event}`
                    eventL.appendChild(text)
                });

                document.querySelector(".soda-springs .text").appendChild(name);
                document.querySelector(".soda-springs .text").appendChild(motto);
                document.querySelector(".soda-springs .text").appendChild(year);
                document.querySelector(".soda-springs .text").appendChild(pop);
                document.querySelector(".soda-springs .text").appendChild(rain);
                document.querySelector(".soda-springs .text").appendChild(eventL);
                
            } else if (town.name === "Fish Haven") {
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let year = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let eventsp = document.createElement('p');
                let eventL = document.createElement('div');
                let events = town.events;

                name.innerHTML = `${town.name}`
                motto.innerHTML = `${town.motto}`
                year.innerHTML = `Year Founded: ${town.yearFounded}`
                pop.innerHTML = `Population: ${town.currentPopulation}`
                rain.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`
                eventsp.innerHTML = `<strong>Coming Events<strong>`
                eventL.appendChild(eventsp);
                events.forEach(event => {
                    let text = document.createElement('p');
                    text.innerHTML = `${event}`
                    eventL.appendChild(text)
                });

                document.querySelector(".fish-haven .text").appendChild(name);
                document.querySelector(".fish-haven .text").appendChild(motto);
                document.querySelector(".fish-haven .text").appendChild(year);
                document.querySelector(".fish-haven .text").appendChild(pop);
                document.querySelector(".fish-haven .text").appendChild(rain);
                document.querySelector(".fish-haven .text").appendChild(eventL);
            }

        });
    });