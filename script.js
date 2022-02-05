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

//  secret number to guess
const numberToGuess = Math.trunc(Math.random() * 20) +1;
 ; 

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