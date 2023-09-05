//!CONVERTIR FUNCION DE PROMESAS EN ASINCRONAS
/*
function hola(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("hola, " + nombre);
         //Se reemplaza el callback por el resolve.
         resolve(nombre);
         reject("hay un error");
      }, 1500);
   })
};
*/

//Se adiciona antes de la funcion la palabra async

async function hola(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("hola, " + nombre);
         //Se reemplaza el callback por el resolve.
         resolve(nombre);
         reject("hay un error");
      }, 1500);
   })
};




async function adios(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('Adios', nombre);
         resolve();
      }, 1000);
   })
   
   
};

//* Funcion con Promesa

async function hablar(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('bla bla bla');
         resolve(nombre);
      }, 1000);
   })
   

};

async function main() {
   let nombre = await hola("andrea");
   await hablar();
   await adios(nombre);
}

main();