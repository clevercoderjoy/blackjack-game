const displayMessage = document.getElementById("displayMessage");
const displayCards = document.getElementById("display-cards");
const displaySum = document.getElementById("display-sum");
const btnStartGame = document.getElementById("start-game");
const btnNewCard = document.getElementById("new-card");
const btnResetGame = document.getElementById("reset-game");

let cards = [];
let hasBlackJack = false;
let isAlive = false;
let sum = 0;

const startGame = () => {
    isAlive = true;
    hasBlackJack = false;
    btnStartGame.disabled = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

const renderGame = () => {
    displayCards.textContent = `Cards: `;
    cards.map((card) => displayCards.textContent += ` ${card}`);

    displaySum.textContent = `Sum: ${sum}`;
    if(sum <= 20){
        displayMessage.textContent = `Draw a new card?`;
    }
    else if(sum === 21){
        displayMessage.textContent = `You've got a BLACK - JACK!`;
        hasBlackJack = true;
    }
    else{
        displayMessage.textContent = `You've lost! Play again?`;
        isAlive = false;
    }
}

const getRandomCard = () => {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard > 10){
        return 10;
    }
    else if(randomCard === 1){
        return 11;
    }
    return randomCard;
}

const newCard = () => {
    if(isAlive && !hasBlackJack){
        let getNewCard = getRandomCard();
        sum += getNewCard;
        cards.push(getNewCard);
        renderGame();
    }
}

const resetGame = () => {
    btnStartGame.disabled = false;
    sum = 0;
    cards = [];
    renderGame();
}

btnStartGame.addEventListener("click", startGame);
btnNewCard.addEventListener("click", newCard);
btnResetGame.addEventListener("click", resetGame);