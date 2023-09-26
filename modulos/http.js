const http = require('http');

//crear un servidor basico
http.createServer( function (req , res) {
   console.log("nueva peticion!");
   console.log(req.url);

   //Escribir respuesta al usuario. 
   res.write('Hola ya se usar http de node.js')

   //terminar la peticion
   res.end();
   
}).listen(3000) //escuchado en el puerto 3000

console.log("Escuchando http en el puerto 3000");