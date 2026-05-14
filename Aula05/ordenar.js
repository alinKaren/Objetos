const clientes = require('./clientes.json');


/* 
-1: Si la función retorna -1, significa que a debe ir antes que b.
1: Si la función retorna 1, significa que a debe ir después de b.
0: Si la función retorna 0, significa que a y b son considerados iguales en términos de orden, y su posición relativa no cambia.
 */
function ordenar(lista, nombre){
return lista.sort((a,b) => {
if (a[nombre] < b[nombre]){
    return -1;
}
if(a[nombre]>b[nombre]){
    return 1;
}
return 0;
})

}

const resultado =ordenar(clientes,"nombre"); 
//console.log(resultado);
const ordenadoInverso = resultado.reverse();

console.log(resultado);