console.log(document);

const cardContainer = document.getElementsByClassName('card_container');

cardContainer[0].textContent = "Bonjour Madame Josiane !";

cardContainer[0].style.color = "blue";
console.log(cardContainer[0]);

const titre = document.getElementsByTagName('h1');

titre[0].style.fontSize = "90px";
