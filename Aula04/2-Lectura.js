//require(). Esta función nos permite “importar” o traer el contenido de un archivo .json a un archivo .js.

const datos = require("./1-Cliente.json"); 
console.log(datos); 

//imprime el tipo de dato de datos 
console.log("\n Tipo de dato: " + typeof datos);

//funcion  JSON.stringify() : recibe un objeto y lo convierte en texto (ligero)         JSON.parse()
const datosString = JSON.stringify(datos); //método stringify() Convierte un valor JavaScript a una cadena JSON  
console.log(datosString);
console.group(typeof datosString); 


const datosObj =JSON.parse(datosString); //PARSE: conviere formato JSON y devuelve en formato obj javascript

//localStorage:  permite a los desarrolladores guardar información en el navegador del usuario. 
console.log(datosObj); 
console.log(typeof  datosObj); 
