//Mensajes en consola
console.warn("algo");
console.error("algo");

//** CONSOLE.TABLE */
//Imprime una tabla
let tabla = [
  {
    a: "linea",
    b: "linea2",
  },
];

console.table(tabla);

/*
─────────┬─────────┬──────────┐
│ (index) │    a    │    b     │
├─────────┼─────────┼──────────┤
│    0    │ 'linea' │ 'linea2' │
└─────────┴─────────┴──────────┘
*/

const datos = [
   { nombre: "Juan", edad: 30 },
   { nombre: "Ana", edad: 25 },
   { nombre: "Carlos", edad: 40 }
 ];
 
 console.table(datos);

 /*
 ─────────┬──────────┬──────┐
│ (index) │  nombre  │ edad │
├─────────┼──────────┼──────┤
│    0    │  'Juan'  │  30  │
│    1    │  'Ana'   │  25  │
│    2    │ 'Carlos' │  40  │
*/
 

//** CONSOLE.GROUP */
console.group("Numeros"); //Inicia el grupo
console.log("1");
console.log("2");
console.log("3");
console.group("Letras");
console.log("A");
console.log("B");
console.log("C");
console.groupEnd("Numeros"); //Finaliza el grupo

/*
Numeros
  1
  2
  3
  Letras
    A
    B
    C
 */

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");
console.count("veces");

/*
veces: 1
  veces: 2
  veces: 3
  veces: 1
  veces: 2
  veces: 3
*/

//!Limpiar la consola
// console.clear();

console.time("miTimer");
// Realiza alguna operación que deseas medir
//miTimer: 0.111ms
console.timeEnd("miTimer");


//! Evaluar expresiones

const valor = 5;
console.assert(valor === 10, "El valor no es igual a 10");


















// !!!!!!!
//Oye
// TE
// Amo
// !!!!!!!

















