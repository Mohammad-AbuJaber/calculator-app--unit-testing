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
    describe('Edge Cases and Error Handling', () => {
        it('should throw an error when dividing by zero', () => {
            const operands = [6, '/', 0];
            expect(() => calc(...operands)).toThrow('Division by zero');
        });

        it('should handle negative numbers correctly', () => {
            const operands = [-8, '+', 5];
            const result = calc(...operands);
            expect(result).toBe(-3);
        });

        it('should handle decimal numbers correctly', () => {
            const operands = [3.5, '*', 2];
            const result = calc(...operands);
            expect(result).toBe(7);
        });

        it('should ignore numbers larger than 1000', () => {
            const operands = [2, '+', 1001];
            const result = calc(...operands);
            expect(result).toBe(2);
        });
    });
    describe('Order of Operations and Multiple Operators', () => {
        it('should follow the correct order of operations', () => {
            const operands = [2, '+', 3, '*', 4];
            const result = calc(...operands);
            expect(result).toBe(14);
        });

        it('should throw an error for an invalid operator', () => {
            const operands = [5, '$', 3];
            expect(() => calc(...operands)).toThrow('Invalid operator');
        });

        it('should throw an error for invalid input types', () => {
            const operands = ['2', '+', 3];
            expect(() => calc(...operands)).toThrow('Invalid input type');
        });

        it('should throw an error for multiple operators in a row', () => {
            const operands = [5, '+', '*', 3, '/'];
            expect(() => calc(...operands)).toThrow('Invalid input');
        });

        it('throws error for invalid input', () => {
            const operands = ['+', 5, '+', 3, 3];
            expect(() => calc(...operands)).toThrow('Invalid input');
        });
    });
    describe('Handling an Unknown Amount of Numbers', () => {
        it('should handle an unknown amount of numbers', () => {
            const operands1 = [1, '+', 2, '+', 3, '+', 4];
            const result1 = calc(...operands1);
            expect(result1).toBe(10);

            const operands2 = [1, '+', 2, '+', 3, '+', 4, '+', 5];
            const result2 = calc(...operands2);
            expect(result2).toBe(15);
        });
    });
});
