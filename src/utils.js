export function rollDice () {
    return Math.floor(Math.random() * 6) + 1;
}


export function updateDiceImage(diceElement) { 
    const number = rollDice();
    diceElement.classList.add("transparent");
    setTimeout(() => {
        diceElement.src = `./images/${number}.png`
        diceElement.classList.remove("transparent");
    }, 300)
}