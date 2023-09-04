//! VARIBALES DE ENTORNO

//Un valor que no quiero que vaya dentro del software, una credencial o un valor dependiente de lo que hagamos. 

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no hay web'

//Se aconseja utilizar en mayusculas y si tiene 2 palabras colocar el guion bajo en el espacio: Ejemplo MI_WEB
 
console.log('hola ' + nombre);
console.log('Mi web es ' + web);