const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button-choice');
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0)
    {
        computerChoice = 'Rock';
    }
    if (randomNumber === 1)
    {
        computerChoice = 'Paper';
    }
    if (randomNumber === 2)
    {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerText = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice)
    {
        result = 'Draw';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper')
    {
        result = 'Win';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors')
    {
        result = 'Looser';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock')
    {
        result = 'Looser';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors')
    {
        result = 'Win';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock')
    {
        result = 'Win';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper')
    {
        result = 'Looser';
    }
    resultDisplay.innerText = result;
}