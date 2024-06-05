/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
 
/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';
let user1 = '';
let user2 = '';
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const innerText = event.target.innerText;

    if (innerText >= '0' && innerText <= '9') {
      handleNumber(innerText);
    } else if (innerText === 'C') {
      clearDisplay();
    } else if (innerText === '=') {
      calculateResult();
    } else {
      handleOperator(innerText);
    }
  });
});

handleNumber = function(number) {
  currentInput += number;
  display.textContent = currentInput;
}

clearDisplay = function() {
  currentInput = '';
  operator = '';
  user1 = '';
  user2 = '';
  display.textContent = '0';
}

handleOperator = function(op) {
  if (currentInput !== '') {
    if (user1 === '') {
      user1 = currentInput;
      currentInput = '';
    } else if (user2 === '') {
      user2 = currentInput;
      currentInput = '';
      calculateResult();
    }
    operator = op;
  }
}

calculateResult = function() {
  if (user1 !== '' && operator !== '' && currentInput !== '') {
    user2 = currentInput;
    let result;

    if (operator === "+") {
        result = user1 + user2;
    } else if(operator === "*") {
      result = user1 * user2;
    } else if(operator === "-") {
      result = user1 - user2;
    } else if(operator === "/") {
      result = user1 / user2;
      return;
    }
      
    

    display.textContent = result;
    user1 = result;
    currentInput = '';
    operator = '';
    user2 = '';
  }
};