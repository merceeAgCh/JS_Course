//las constantes pueden ser modificadas cuando son arreglos u objetos

const personita = {
    nombre: 'Pepito',
    apellido: 'Garcia',
    grado: 5,
    educacion: 'Primaria'
}

//Puedo modificar un valor del objeto, por ejemplo el grado
personita.grado = 2
//De igual forma podemos agregar una propiedad al objeto
personita.pais = 'Mexico'
personita.beca = false
console.log(personita)