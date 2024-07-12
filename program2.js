function calculateExpression(expression) {

    const sanitizedExpression = expression.replace(/\s+/g, '');

    
    let total = 0;
    let currentNumber = '';
    let currentOperator = '+';

    for (let i = 0; i < sanitizedExpression.length; i++) {
        const char = sanitizedExpression[i];

        if (!isNaN(char)) {  
            currentNumber += char;
        }

        if (isNaN(char) || i === sanitizedExpression.length - 1) {
            if (char === '-' && currentNumber === '') {
                currentNumber = '-';  
            } else {
                if (currentOperator === '+') {
                    total += parseInt(currentNumber);
                } else if (currentOperator === '-') {
                    total -= parseInt(currentNumber);
                }
                currentNumber = '';
                currentOperator = char;
            }
        }
    }

    return total;
}

console.log(calculateExpression("3 + 5 - 2")); 
console.log(calculateExpression("10 - 3 + 2")); 
console.log(calculateExpression("8 + 2 - 10")); 
console.log(calculateExpression("-10 + 5 + 15 - 20")); 
