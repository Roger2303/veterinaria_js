const operaciones = require('./operaciones');

const argumentos = process.argv.slice(2)
const [funcion, ...args] = argumentos;

switch (funcion) {
    case 'leer':
    operaciones.leer()
    break;

    case 'agendar':
    operaciones.agendar(args)
    break;

    default: 
    console.log('Por favor ingresa bien los datos')
    break;
}