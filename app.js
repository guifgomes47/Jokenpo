const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button-choice');
let img = document.createElement('img');
let img1 = document.createElement('img');
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoices) =>
    possibleChoices.addEventListener('click', (e) => {
        userChoice = e.target.id;
        if (userChoice == 'Rock') {
            img.id = 'mini-icon';
            img.src = './assets/rock.png';
        }
        if (userChoice == 'Paper') {
            img.id = 'mini-icon';
            img.src = './assets/paper.png';
        }
        if (userChoice == 'Scissors') {
            img.id = 'mini-icon';
            img.src = './assets/scissors.png';
        }
        userChoiceDisplay.appendChild(img);
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'Rock';
        img1.id = 'mini-icon';
        img1.src = './assets/rock.png';
    }
    if (randomNumber === 1) {
        computerChoice = 'Paper';
        img1.id = 'mini-icon';
        img1.src = './assets/paper.png';
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors';
        img1.id = 'mini-icon';
        img1.src = './assets/scissors.png';
    }

    computerChoiceDisplay.appendChild(img1);
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw';
        resultDisplay.style.color = 'white';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'Win';
        resultDisplay.style.color = 'green';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Loser';
        resultDisplay.style.color = '#C3073F';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Loser';
        resultDisplay.style.color = '#C3073F';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'Win';
        resultDisplay.style.color = 'green';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'Win';
        resultDisplay.style.color = 'green';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Loser';
        resultDisplay.style.color = '#C3073F';
    }

    resultDisplay.innerText = result;
}
