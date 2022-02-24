const operacion = async (num1: number, num2: number, operador: string) => {
    let operacionesModulo = await import('./operaciones.js');
    let resultado = await operacionesModulo.operaciones(num1, num2, operador);
    console.log(resultado);
    return resultado;
};

operacion(2, 3, 'sumar');
operacion(5, 2, 'restar');
operacion(5, 2, 'xxxxx');
