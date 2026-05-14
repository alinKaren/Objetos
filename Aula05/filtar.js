const clientes =require('./clientes.json'); 

function filtarPorPais(lista,pais){
    return lista.filter((cliente) => cliente.direccion.pais === pais); 
}

 const resultado = filtarPorPais(clientes,"Mexico"); 

 console.log(resultado);