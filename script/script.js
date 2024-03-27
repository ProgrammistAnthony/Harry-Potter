import {data1} from "./data.js"
let data = data1;

const input = document.querySelector(`.content__input`);
const divCards = document.querySelector(`.main__cards`);
const select = document.querySelector(`.input__select`);

const getCards = (array) =>{
    divCards.innerHTML = ""
    array.forEach((el) =>{
    const card = document.createElement(`div`);
    card.className = `main__card`;
    card.innerHTML =`
    <div class="img__box">
                        <img src="${el.image}" alt="card__hero" class="card__img">
                    </div>
                    <div class="card__about">
                        <h5 class="card__name">Name: ${el.name}</h5>
                        <p class="card__actor">Actor: ${el.actor}</p>
                        <p class="card__gender">Gender: ${el.gender}</p>
                        <p class="card__house">House: ${el.house}</p>
                        <p class="card__wand">Wand: ${el.wand.core}</p>
                        <p class="alive">Alive: ${el.alive === true ? "yes" : "No"}</p>
                    </div>
    `
    divCards.append(card);
})
}
getCards(data);

const inputHandler = (evt) =>{
    const value = evt.target.value;
    const findName = data.filter((el) => 
    (el.name.toLowerCase() + " " +
        el.actor.toLowerCase() + " " +
        el.gender.toLowerCase() + " " +
        el.house.toLowerCase() + " " +
        (el.wand.core ? el.wand.core.toLowerCase() : "") + " " +
        el.alive.toString().toLowerCase()).includes(value));
    // const result = [...new Set([...findName])];
    getCards(findName);
}

input.addEventListener(`input`, inputHandler);

const selectHundler = (evt) =>{
    let value = evt.target.value;
    console.log(value);
    let findHouse = data.filter((el) => el.house ? el.house.toLowerCase().includes(value.toLowerCase()) : el.house = "Secret school"
    
    );
    console.log(findHouse);
    getCards(findHouse);
   
}

select.addEventListener('change', selectHundler);