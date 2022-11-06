function getNumber(text) {
    let num;
    do {
        num = parseInt(prompt(text));
    } while (isNaN(num));
    return num; 
}

function getZnak(znak) {
    do {
        znak = prompt('What math action needs to be done? Enter any option from the list: +, -, /, *, ^, %.');
    } while (znak!=='+' && znak!=='-' && znak!=='/' && znak!=='*' && znak!=='^' && znak!=='%');
    return znak; 
}

let x = getNumber('Enter the first number:');
let znak = getZnak();
let y = getNumber('Enter the second number:');

document.write(`The result of a mathematical operation ${doMath(x, znak, y)}`);
function doMath(value1, operation, value2) {
    let result = 0;
    if (znak === '+') {
        result = x + y;
        return result;
    } else if (znak === '-') {
        result = x - y;
        return result;
    } else if (znak === '*') {
        result = x * y;
        return result;
    } else if (znak === '/') {
        result = x / y;
        return result;
    } else if (znak === '^') {
        result = x ** y;
        return result;
    } else if (znak === '%') {
        result = x % y;
        return result;
    }
}

