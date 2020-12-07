let time;
let score = 0;
let isPlaying;    //for checking game is runing or over
let currentLevel;

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const totalSeconds = document.querySelector('#seconds');
const currentWord = document.querySelector('#current-word');
const wordInput = document.querySelector('#word-input');
const messageDisplay = document.querySelector('#message');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const highscoreDisplay = document.querySelector('#highscore');
const startBtn = document.querySelector('#start');
const playAgain = document.querySelector('#playagain');
const btnEasy = document.querySelector('#btneasy');
const btnMedium = document.querySelector('#btnmedium');
const btnHard = document.querySelector('#btnhard');

const wordsList = [
    'army',
    'sweep',
    'debut',
    'preach',
    'relief',
    'feather',
    'boy',
    'tablet',
    'differ',
    'powder',
    'bomb',
    'laser',
    'owe',
    'theme',
    'spill',
    'halt',
    'company',
    'run',
    'grounds',
    'tragedy',
    'persist',
    'size',
    'embox',
    'recover',
    'clinic',
    'waist',
    'inflate',
    'invite',
    'weed',
    'applied',
    'scratch',
    'keep',
    'area',
    'stride',
    'cheese',
    'hiccup',
    'painter',
    'rally',
    'digress',
    'passion',
    'advance',
    'snuggle',
    'soil',
    'bracket',
    'equip',
    'active',
    'herd',
    'refund',
    'harbor',
    'drown'
]


btnEasy.addEventListener('click', () => {
    time = levels.easy;
    totalSeconds.innerHTML = time;
})

btnMedium.addEventListener('click', () => {
    time = levels.medium;
    totalSeconds.innerHTML = time;
})

btnHard.addEventListener('click', () => {
    time = levels.hard;
    totalSeconds.innerHTML = time;
})

startBtn.addEventListener("click", gameStart);

function gameStart() {
    if (time == null) {
        alert('Please at first select the game level!!!!');
        restart();
    }
    console.log('start');
    startBtn.style.display = "none";
    showWord();
    wordInput.addEventListener('input', startWordMatching);
    setInterval(countDownTime, 1000);
    setInterval(checkGameStatus, 50);
}

function showWord() {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    console.log(randomIndex);
    currentWord.innerHTML = wordsList[randomIndex]
}

function startWordMatching() {
    if (matchWord()) {
        isPlaying = true;
        time = 6;
        showWord();
        wordInput.value = '';
        score++
    }
    scoreDisplay.innerHTML = score;

}

function matchWord() {
    if (wordInput.value === currentWord.innerHTML) {
        messageDisplay.innerHTML = 'Correct!!!';
        return true;
    }
    else {
        messageDisplay.innerHTML = '';
        return false;
    }
}

function countDownTime() {
    if (time > 0) {
        time--;
    }
    else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkGameStatus() {
    if (!isPlaying && time === 0) {
        messageDisplay.innerHTML = 'Game is over!!!!';
        highscoreDisplay.innerHTML = score;
        scoreDisplay.innerHTML = 0;
        document.querySelector('#playagaindiv').classList.remove('invisible');
    }
}

playAgain.addEventListener('click', restart);
function restart() {
    location.reload();   //to reload or refresh the webpage
}