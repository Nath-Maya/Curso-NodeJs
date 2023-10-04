//Process es un modulo global

process.on("beforeExit", ()=>{
   console.log("El proceso va a terminar");
});

process.on("exit", ()=>{
   console.log("El proceso termino");
});

process.on('uncaughtException', (error, origen) => {
   console.error("Se olvido capturar error");
   console.error(err);
});

functionQueNoexiste
