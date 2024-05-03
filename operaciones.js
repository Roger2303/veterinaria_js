const {readFileSync, writeFileSync} = require('fs');

const leer = () => {

const citas = JSON.parse(readFileSync('citas.json','utf-8'));

console.log('\n')
console.log('Citas agendadas: ')
console.log(citas)
console.log('*******************')
console.log('\n')
return citas;
};

const agendar = (args) => {
const [nombre, edad, animal, color, enfermedad] = args

const citas = leer();
const nueva_cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
    }
citas.push(nueva_cita)


writeFileSync('citas.json', JSON.stringify(citas))
console.log('Cita agendada', nombre, edad, animal, color, enfermedad)

console.log('\n')
console.log('Se agregó la cita:')
console.log(nueva_cita)
console.log('******************')
console.log('\n')
};

module.exports = {leer, agendar};