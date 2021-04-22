import {updateDiceImage} from './src/utils.js';
const diceElement = document.querySelector('img');
const button = document.querySelector("button");

function handleClick(event) {
    console.log(event.target, "clicked");
    updateDiceImage(diceElement)
}

button.addEventListener("click", handleClick);