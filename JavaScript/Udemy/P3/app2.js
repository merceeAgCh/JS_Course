/*
--ES6--


startsWith(valor [,inicio])
Sirve para saber si ña cadena empieza con ese valor. Devuelve true o false.
*/
const cadena = "Hola a todos ustedes mundanos.";
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('a', 5)); //buscamos si inicia con esta letra e inicia a contar en la posicion 5


/*
endsWith(valor [,logitud]) Sirve para saber si la cadena termina con ese valor.
Devuelve true o false
*/

console.log(cadena.endsWith('s'));
console.log(cadena.endsWith('a', 6));//preguunta si la frase termina en A considerando solo los primeros 6 caracteres


/*
includes(valor[, inicio])
Igual que indexOf, pero devuelve tru o false.
Nos indica si es verdadero o falso si existe esa letra en la cadena.
*/

console.log(cadena.includes('n'));
console.log(cadena.includes('H', 5))

/*
repeat(valor)
Repite el string el numero de veces que le indiquemos
*/

const otrafrase = "Digamos hola.";blob:https://teams.microsoft.com/f9a58f64-2d03-4832-b542-6cde82fa3db2