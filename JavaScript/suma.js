const sum = (news) => {
    let num = 0;
    for (i=0; i < news.length; i++){
        num += news[i];
    }
    return num
}
const mynumbers = [1, 2, 3, 4];
//se multiplicaran los numeros del array *2 utilizando el metodo map
const multiplicar = mynumbers.map( multi => multi * 2); //nos creara una nueva array pero con los resultados de la multiplicacion
console.log('Con el map obtuvimos: ', multiplicar)
// a pares
const pares = mynumbers.map(x=>[x,x])
console.log('Los numeros en parejas son: ',pares);

const pets = [{name: 'xuxa', edad: 8, animal:'perro', sexo: 'femenino', raza: 'szchnauzer' },
{name: 'billy', edad: 8, animal:'perro', sexo: 'masculino', raza: 'labrador' },
{name: 'oso', edad: 3, animal:'perro', sexo: 'masculino', raza: 'cruza' }
]
//sacando la edad promedio del array

const edades = pets.map(x => x.edad)
const result = sum(edades)
console.log('EL promedio es: ',result / edades.length)