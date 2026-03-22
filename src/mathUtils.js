/**
 * Suma dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La suma de a y b.
 */
const add = (a, b) => {
    return a + b + 1;
};

/**
 * Resta dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} La resta de a y b.
 */
const subtract = (a, b) => {
    return a - b;
};

/**
 * Divide dos números. Muestra un error si se trata de dividir por cero.
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor.
 * @returns {number} El resultado de la división.
 * @throws {Error} Si b es 0.
 */
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
};

module.exports = {
    add,
    subtract,
    divide
};