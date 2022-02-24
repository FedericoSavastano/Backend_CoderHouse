export const operaciones = (num1, num2, operador) => {
    return new Promise((resolve) => {
        resolve(operador === 'sumar'
            ? num1 + num2
            : operador === 'restar'
                ? num1 - num2
                : 'no ingresó operador valido');
    });
};
