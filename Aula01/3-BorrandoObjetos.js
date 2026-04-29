const objPersonaje = {
 nombre: "Garfield",
 color: "naranja",
 raza: "gato",

 amigo: {
   nombre: "Odie",
   raza: "perro"
 },
}



delete objPersonaje.amigo;
delete objPersonaje["raza"];

console.log(objPersonaje.nombre); 
console.log(objPersonaje.color); 

console.log(objPersonaje.amigo); //undefined
console.log(objPersonaje.raza); //undefined

const delProp = delete objPersonaje.amigo;
const delPropInexistente = delete objPersonaje["direccion"];

console.log(delProp) //true
console.log(delPropInexistente) //true