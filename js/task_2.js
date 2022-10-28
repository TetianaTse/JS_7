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

function doMath(x, znak, y) {
    x = getNumber('Enter the first number:');
    znak = getZnak();
    y = getNumber('Enter the second number:');
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
document.write(`The result of a mathematical operation ${doMath()}`);