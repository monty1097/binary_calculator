const userInput = document.querySelector("#user_input");
let expression = '';

function press(num) {
  expression += num;
  userInput.value = expression;
}

function equal() {
   if (expression.includes('+') || expression.includes('-') || expression.includes('*') || expression.includes('/')) {
      const match = expression.match(/([01]+)([+\-*\/])([01]+)/);

    if (!match) {
      erase();
      return;
    }


    const binaryNum1 = match[1];
    const operator = match[2];
    const binaryNum2 = match[3];

    const decimalNum1 = parseInt(binaryNum1, 2);
    const decimalNum2 = parseInt(binaryNum2, 2);

    let result;
    switch (operator) {
      case '+':
        result = decimalNum1 + decimalNum2;
        break;
      case '-':
        result = decimalNum1 - decimalNum2;
        break;
      case '*':
        result = decimalNum1 * decimalNum2;
        break;
      case '/':
        if (decimalNum2 !== 0) {
          result = decimalNum1 / decimalNum2;
        } else {
          erase();
          return;
        }
        break;
      default:
            erase();
        return;
    }

   
    userInput.value = result;
  } else {
 
    const decimalResult = parseInt(expression, 2);
    userInput.value = decimalResult;
  }


  expression = '';
}

function erase() {
  expression = '';
  userInput.value = expression;
}
