const calc = require('./calculator');

describe('Calculator', () => {
    describe('Basic Arithmetic Operations', () => {
        it('should return the correct sum of two numbers', () => {
            const operands = [2, '+', 3];
            const result = calc(...operands);
            expect(result).toBe(5);
        });

        it('should return the correct difference of two numbers', () => {
            const operands = [5, '-', 2];
            const result = calc(...operands);
            expect(result).toBe(3);
        });

        it('should return the correct product of two numbers', () => {
            const operands = [4, '*', 6];
            const result = calc(...operands);
            expect(result).toBe(24);
        });

        it('should return the correct quotient of two numbers', () => {
            const operands = [10, '/', 2];
            const result = calc(...operands);
            expect(result).toBe(5);
        });
    });
});
