/*Metodos y Propiedades
Metodo: Es todo aquello que la cadena puede hacer (Objeto string).
	ejemplo: convertise en mayusculas.
Propiedad: Son las caracteristicas que tiene la cadena (objeto) por ser un string (cadena)
	ejemplo: Longitud	

	Para hacer uso de la propiedad, se hace con la nomenclatura:
			cadena.metodo
			cadena.propiedad
    Los metodos van con parentesis, y a veces los parentesis del metodo tiene atributos
*/

console.log("=========================================");
console.log("=========================================");
console.log("            MÉTODOS Y PROPIEDADES ");
console.log("=========================================");
console.log("=========================================");
console.log();

let cadena = "Hola a todos";
/*Propiedades
length nos devuelve la longitud de la cadena
*/
console.log("Nuestro string es: ", cadena);
console.log("La longitud de este string es: ", cadena.length);

/*Métodos
Todos los métodos devuelven una cadena nueva, la cadena original no se modifica
toUpperCase() este metodo nos regresa una cadena a mayuculas
toLowerCase() nos regresa una cadena en minusculas
*/

//guardaremos la cadena en mayusculas
const mayusculas = cadena.toUpperCase();
//console.log(cadena.toUpperCase());
console.log("La cadena orginal es: ", cadena);
console.log("Nuestra cadena en mayusculas: ", mayusculas);


//haremos la cadena en minusculas
const minusculas = cadena.toLowerCase();
//console.log(cadena.toLowerCase());
console.log("La cadena original: ", cadena);
console.log("La cadena en minusculas: ", minusculas);

/*indexOf(string): nos devuelve la posicion en la que se encuentra el sitring,
si no lo encuentra devuelve -1
*/
console.log(cadena.indexOf('x')); // como la x no esta dentro de nuestra cadena, nos devuelve -1
console.log(cadena.indexOf('a'));

/*Repalce(valor a buscar, valor nuevo)
Remplaza el fragmento de la cadena que le digamos y pone un valor nuevo
*/
console.log(cadena.replace('o', 'oo'));

/*
Substring(inicio [,fin]) este extrae los caracteres desde el incio hasta el fin
el final no se incluye. si no se incluye el fin extrae hasta el final.
*/
console.log(cadena.substring(3));
console.log(cadena.substring(2, 10));

/*SLICE(inicio [,fin])
Al igual que el substring, primero admite valores negativos, si queremos valores negativos,
empezara desde atras. Si no incluye el final, extrae hasta el final.
		(2,4) Empieza a contar en el tercer caracter y los 4 ultimos no son considerados.
*/

console.log(cadena.slice(-3));
console.log(cadena.slice(3));
console.log(cadena.slice(0, -6));

/*trim() Elimina los espacios al inicio y final de la cadena.
*/
const mifrase = "Apendiendo JS, y este es de cadenas      "
console.log(mifrase.trim());