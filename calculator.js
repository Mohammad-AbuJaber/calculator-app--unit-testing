function validateInput(args) {
    const validOperators = new Set(['+', '-', '*', '/']);

    if (args.length < 3 || args.length % 2 === 0) {
        throw new Error('Insufficient number of arguments');
    }
    
    for (let i = 0; i < args.length; i++) {
        if (i % 2 === 0 && typeof args[i] !== 'number') {
            throw new Error('Invalid input type');
        } else if (i % 2 === 1 && !validOperators.has(args[i]) && typeof args[i] !== 'number') {
            throw new Error('Invalid operator');
        }

        if (args[i] === '/' && args[i + 1] === 0) {
            throw new Error('Division by zero');
        }

        if (args[i] > 1000) {
            args[i] = 0;
        }
    }
}

function calc(...args) {
    validateInput(args);
    return eval(args.join(''));
}

module.exports = calc;
