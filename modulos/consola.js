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
