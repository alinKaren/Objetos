const clientes = require("./clientes.json"); 
console.log(clientes.length);//12 objetos por trabajar


function buscarNombre (listaClientes, llave, valor){
    //return listaClientes.find((cliente) => cliente[llave] ===valor);
    return listaClientes.find((cliente) => cliente[llave].includes(valor));
}

//const resultado = buscarNombre(clientes, "nombre", "Miguel"); 
//const resultado = buscarNombre(clientes, "email", "elizabeth@gmail.com"); 
const resultado = buscarNombre(clientes, "telefonos", "55 6456 7456"); 
console.log(resultado);