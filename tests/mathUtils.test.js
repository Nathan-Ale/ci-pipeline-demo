const { add, subtract, divide } = require('../src/mathUtils');

// Grupo de pruebas para la función 'add'
describe('Función add', () => {

    test('suma 1 + 2 para obtener 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('suma -1 + 1 para obtener 0', () => {
        expect(add(-1, 1)).toBe(0);
    });
});

// Grupo de pruebas para la función 'subtract'
describe('Función subtract', () => {

    test('resta 5 - 3 para obtener 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('resta 0 - 5 para obtener -5', () => {
        expect(subtract(0, 5)).toBe(-5);
    });
});

// Grupo de pruebas para la función 'divide'
describe('Función divide', () => {

    test('divide 10 / 2 para obtener 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide 9 / 3 para obtener 3', () => {
        expect(divide(9, 3)).toBe(3);
    });

    test('lanzar un error al dividir por cero', () => {
        // Para probar que una función lanza un error, la envolvemos en otra función
        expect(() => divide(5, 0)).toThrow('No se puede dividir por cero');
    });
});