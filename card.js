const IMAGE_URL = "http://placehold.co/200";
const USER = {
    id: 1,
    username: `User Name`,
    description: `me gustan los conejos`,
    age: `26`,
    fav_music: {
        bands: [`wallows`, `rare occasions`]
    }
}

//Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById("card-img-container");

// Crear elementos
// img
const imageElement = document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User photo";

// Crear elemento titulo -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");

//poblar
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent = USER.description;

//Renderizar
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement);


