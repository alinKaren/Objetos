const objPersonaje = {
 nombre: "Garfield",
 color: "naranja",
 raza: "gato",

 amigo: {
   nombre: "Odie",
   raza: "perro"
 },
}

// Si quisiéramos por ejemplo, eliminar la propiedad amigo,
//  podemos utilizar la palabra reservada delete:

delete objPersonaje.amigo;
delete objPersonaje["raza"];

console.log(objPersonaje.nombre); 
console.log(objPersonaje.color); 

console.log(objPersonaje.amigo); //undefined
console.log(objPersonaje.raza); //undefined


// Por último, ten en cuenta que el resultado de utilizar delete es un booleano, es decir, true o false. 
// Sin embargo, ten en cuenta que si intentamos eliminar una llave que no existe nos regresa true, 
// ve el siguiente para que te quede mas claro.

const delProp = delete objPersonaje.amigo;
const delPropInexistente = delete objPersonaje["direccion"];

console.log(delProp) //true
console.log(delPropInexistente) //true