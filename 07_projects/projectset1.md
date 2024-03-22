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