//OS MODULE: operating system
//Se utiliza para recuperar informacion del sistema operativo y sobre la máquina.

const os = require('node:os');

console.log(os.arch()) //-- x64 
//visualizar la arquitectura

console.log(os.platform()) //darwin
//sistema operativo sobre el que estoy corriendo

console.log(os.cpus())
//Informacion de las cpus que tenemos en el sistema

console.log(os.cpus().length)

console.log(os.freemem()) //memoria libre que tenemos

console.log(os.homedir())

console.log(os.hostname())
