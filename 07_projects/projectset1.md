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