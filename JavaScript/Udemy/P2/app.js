//Clase 2. Operadores matematicos, asignacion incremento y decremento

/*Operadores matematicos*/

console.log("=============================================");
console.log("=============================================");
console.log("            Operadores Matemáticos. ");
console.log("=============================================");
console.log("=============================================");
console.log()

let a = 5;
let b = 6;
let user = "Mercedes";


console.log("La suma de los numeros es: ", a+b);
console.log("La resta de los numeros es: ", a-b);
console.log("El resultado de la multiplicacion es: ", a*b);
console.log("La division de los numeros nos da: ", a/b);
console.log("El modulo nos dvuelve el resto de una division ",a%b);
console.log("Hola " + user); //Esto es una concatenacion

/*Operadores de incremento y decremento*/
console.log()
console.log("=============================================");
console.log("=============================================");
console.log("      Operadores de incremento y decremento. ");
console.log("=============================================");
console.log("=============================================");
console.log()

let x = 5;

console.log(x);
console.log(x++); //toma el valor y le incrementa 1
console.log(x); //aqui el valor ya no es 5 sino 6
console.log(++x); //se incrementa en 1

console.log(x--);
console.log(x);
console.log(--x);

console.log()
console.log("=============================================");
console.log("=============================================");
console.log("           Operadores de asignacion.     ");
console.log("=============================================");
console.log("=============================================");
console.log()

let numero = 10;

/*numero = numero + 3; 
console.log(numero);*/
numero += 3;
console.log(numero);
numero -= 3;
console.log(numero);
numero *= 3;
console.log(numero);
numero /= 3;
console.log(numero);
numero %= 3;
console.log(numero);