const operaciones = ({ n1, n2, operacion }) => {
    const error = {
        error: { 
            n1: {
                valor: n1 || null,
                tipo: typeof n1
            },
            n2: {
                valor: n2 || null,
                tipo: typeof n2
            },
            operacion: {
                valor: operacion || null,
                tipo: typeof operacion
            }
        }
    }

    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

    if(isNaN(n1) || isNaN(n2)) {
        return error;
    }

    let resultado= {}
    switch(operacion) {
        case 'suma': 
            resultado = n1+n2;
            break;
        case 'resta': 
            resultado = n1-n2;
            break;
        case 'multiplicacion': 
            resultado = n1*n2;
            break;
        case 'division': 
            resultado = n1/n2;
            break;
        default:
            return error;
    }
    return { n1, n2, operacion, resultado };
}


export default operaciones;