// apptest.js

const calcular = require('./app');

test('soma de dois números', () => {
    expect(calcular(3, 4, '+')).toBe(7);
});

test('subtração de dois números', () => {
    expect(calcular(10, 5, '-')).toBe(5);
});

test('multiplicação de dois números', () => {
    expect(calcular(3, 5, '*')).toBe(15);
});

test('divisão de dois números', () => {
    expect(calcular(10, 2, '/')).toBe(5);
});

test('divisão por zero', () => {
    expect(calcular(10, 0, '/')).toBe("Ocorreu um erro: Divisão por zero");
});

test('módulo de dois números', () => {
    expect(calcular(10, 3, '%')).toBe(1);
});

test('operador inválido', () => {
    expect(calcular(10, 3, '^')).toBe("Operador não definido.");
});
