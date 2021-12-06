const mynumbers = [1, 2, 3, 4];

const pets = [{name: 'xuxa', edad: 8, animal:'perro', sexo: 'femenino', raza: 'szchnauzer' },
{name: 'billy', edad: 8, animal:'perro', sexo: 'masculino', raza: 'labrador' },
{name: 'oso', edad: 3, animal:'perro', sexo: 'masculino', raza: 'cruza' }
];


//console.log(pets, mynumbers)

//aqui pondremos en practica la funcion filter

const filNumbers = mynumbers.filter(funcion_x => funcion_x <= 2); //nos filtrara los numeros menores o iguales a 2
console.log('numeros filtrados',filNumbers, 'array de numeros', mynumbers);


const petsFilter = pets.filter(animales => animales.sexo == 'femenino')
console.log('Estas son las mascotas con un sexo femenino: ', petsFilter)