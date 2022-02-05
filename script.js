'use strict';
// select the secret number
const secretNumber = document.querySelector('.number')
// select user input guess
const input = document.querySelector('.guess')
// select message
const message = document.querySelector('.message')
// selct score
const scorePoint = document.querySelector('.score')
// selct high score
const highScore = document.querySelector('.highscore')
// selct button
const check = document.querySelector('.check')
// select body
const body = document.querySelector('body')
// select button again
const again = document.querySelector('.again')

//  secret number to guess
let numberToGuess = Math.trunc(Math.random() * 20) +1;
  

// initial score
let score = 20;


// event listener on button
check.addEventListener('click', () => {
  // get the value of the input and convert to number and save to variable
  const guess = Number(input.value);  

  if (!guess) {
    message.textContent = "No a number!";
  } else if (guess === numberToGuess ) {
    message.textContent = "Correct number!!!!";
    // add style when the user guess
    body.style.backgroundColor = '#60b347';
    secretNumber.style.width = '30rem'
    secretNumber.textContent = numberToGuess
  } else if (guess > numberToGuess) {
    if (score > 1) {
      message.textContent = "Too High";
      score--;
      scorePoint.textContent = score ;      
    } else {
      message.textContent = "You Lost";
      scorePoint.textContent = 0
    }      
  } else if (guess < numberToGuess) {
    if (score > 1) {
      message.textContent = "Too Low"; 
      score--;
      scorePoint.textContent = score  ;
    } else {      
      message.textContent = "You Lost";
      scorePoint.textContent = 0
    }      
  }
})


// event listener to reset when again button is clicked
again.addEventListener("click", () => {
  score = 20
  numberToGuess = Math.trunc(Math.random() * 20) +1;
  message.textContent = "Start guessing..."
  body.style.backgroundColor = '#222';
    secretNumber.style.width = '15rem'
    secretNumber.textContent = '?'
    input.value = ""
    scorePoint.textContent = score
})


