//!PROMESAS

//Ejecutan una funcion pero estan basadas en estados: Pendiente, resuelta y reachazada. 

//Funcion con callback
/*
function hola(nombre, miCallback) {
   setTimeout(() => {
      console.log("hola, " + nombre);
      miCallback(nombre);
   }, 1500);
};
*/

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


function adios(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('Adios', nombre);
         resolve();
      }, 1000);
   })
   
   
};

//* Funcion con Promesa

function hablar(nombre) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log('bla bla bla');
         resolve(nombre);
      }, 1000);
   })
   

};

//Llamar la funcion
hola('Nathalia')
   .then(adios)
   .then(hablar)
   .then(function (nombre) {
      console.log("terminado el proceso");
   })
   .catch(error => {
      console.error('ha habido un error: ');
      console.error(error);

   })
