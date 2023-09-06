const fs = require("fs");

//Los metodos en fileSystem deben realizarse de forma asincrona.

//***** LEER UN ARCHIVO */
// metodo readFile

//Parametros: ruta , callback
function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    //Leido
    console.log(data.toString());
  });
}

//Directorio del archivo actual de ejecucion
leer(__dirname + "/archivo.txt");


//***** ESCRIBIR EN EL ARCHIVO */
// metodo writeFile
function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("no he podido escribirlo ", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
};

escribir(__dirname + '/archivo2.txt', 'Soy un archivo nuevo', console.log);


//*******BORRAR EN EL ARCHIVO */

function borrar(ruta, cb) {
   fs.unlink(ruta, cb);
};

borrar(__dirname + '/archivo2.txt' , console.log);


