/* Objeto Literal (por referencia): Es como tener múltiples caminos que te llevan al mismo destino (el mismo objeto en memoria).
 Si cambias algo en el destino, todos los caminos reflejarán ese cambio.*/
console.log("Objeto Literal (por referecia): \n"); 

const objPersonaje = {
 nombre: "Gandalf",
 clase: "mago",
 nivel: "20"
}

const objPersonaje2 = objPersonaje;

console.log(objPersonaje);
console.log(objPersonaje2+'\n');




console.log("Por prototipo: \n"); 
/*Object.create() (por prototipo): Es como tener una plantilla o inspiración para crear un nuevo destino independiente. 
Puedes modificar el nuevo destino sin afectar la plantilla original. */

const objPersonaje3 = {
 nombre: "Gandalf",
 classe: "mago",
 nivel: "20"
}
const objPersonaje4 = Object.create(objPersonaje3)
objPersonaje2.nombre = "Gandalf, el gris"

console.log(objPersonaje3.nombre) //Gandalf
console.log(objPersonaje4.nombre) //Gandalf, el gris 