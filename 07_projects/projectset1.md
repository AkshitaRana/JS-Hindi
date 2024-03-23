# Projects related to DOM

## Project link
[Click here](https://dom-project-chaiaurcode.stackblitz.io/1-colorChanger/index.html)

# Solution Code

## Project 1

```javascript
console.log("Akshita")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## Project 2

```javascript
const form = document.querySelector('form')
// This usecase will give you empty value of height
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  const final= document.querySelector('#final-result')
  

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height";
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight";
  }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    //Show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
      final.innerHTML = `<span>"Under Weight"</span>`;
    }
    else if(bmi>18.6 && bmi<24.9){
      final.innerHTML = `<span>"Normal Range"</span>`;
    }
    else if(bmi>24.9){
      final.innerHTML = `<span>"Overweight"</span>`;
    }
  }
})
```

## Project 3

```Javascript
const clock = document.getElementById('clock')
// const clock =  document.querySelector('#clock')

setInterval(function(){
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4

```Javascript
const randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGame = [];
let numGuess = 1;

let playGame = true;


if (playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if (isNaN(guess)){
    alert('Enter a valid number')
  } else if (guess<1){
    alert('Enter a number greater than 1')
  } else if (guess>100){
    alert('Enter a number smaller than 100')
  }
  else{
    prevGame.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`GameOver. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if (guess == randomNumber){
    displayMessage(`You gussed it right.`)
    endGame()
  }
  else if (guess<randomNumber){
    displayMessage(`Te number is TOO low`)
  }
  else if (guess>randomNumber){
    displayMessage(`Te number is TOO high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remainingGuesses.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startover.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGame = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remainingGuesses.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled', '')
    startover.removeChild(p)
    playGame = true
  })
}

```