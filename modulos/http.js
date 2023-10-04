const http = require("http");

//crear un servidor basico
http.createServer(router).listen(3000); //escuchado en el puerto 3000

function router(req, res) {
  console.log("nueva peticion!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola que tal");
      res.end();
      break;

    default:
      res.write("Error 404: No se lo que quieres");
      res.end();
  }
}
console.log("Escuchando http en el puerto 3000");
