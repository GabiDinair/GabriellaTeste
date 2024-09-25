// app.js

function calcular(a, b, operador) {
    let calcResult;

    switch (operador) {
        case '%':
            calcResult = a % b;
            break;
        case '*':
            calcResult = a * b;
            break;
        case '-':
            calcResult = a - b;
            break;
        case '+':
            calcResult = a + b;
            break;
        case '/':
            if (b !== 0) {
                calcResult = a / b;
            } else {
                calcResult = "Ocorreu um erro: Divisão por zero";
            }
            break;
        default:
            calcResult = "Operador não definido.";
    }

    return calcResult;
}

// Exportando a função para o teste
module.exports = calcular;
