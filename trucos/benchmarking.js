let suma = 0;

console.time("bucle")

for (let i = 0; i < 100000; i++) {
  suma =+ i;
}

console.timeEnd("bucle")

console.time("bucle2")

for (let i = 0; i < 40000000; i++) {
  suma =+ i;
}

console.timeEnd("bucle2")