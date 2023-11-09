const bcrypt = require("bcrypt") // importar paquete

const password = "12345Segura";

bcrypt.hash(password, 10, function(err, hash) {
   console.log(hash)

}) 