const silla =  {
    tipo:"gamer", 
    peso: 6,
    color: "gris y blanco"
}

console.log(silla); //ingrsando a todas la propiedades de silla 
console.log(`El tipo de silla es: ${silla.tipo}`);  //ingresando solo a una propiedad de silla que es tipo 

            //objeto+propiedad+metodos que tiene los tipos de propiedades en este caso los string 
console.log(`
    Tipo: ${silla.tipo.toLocaleUpperCase()}
    Color: ${silla.color}
    Peso: ${silla.peso}
    `);

    //se ocupan corchetes cuando no se sabe el nombre de las propiedades de los objetos 
    //veamos un ejemplo 

/*objeto+propiedad+metodos que tiene los tipos de propiedades en este caso los string  */
console.log(`
    salida con corchetes 
    Tipo: ${silla.tipo.toLocaleUpperCase()} 
    Color: ${silla["color"]}
    Peso: ${silla.peso}
    `);
 
console.log("Ejemplo con forEach y acceso a objetos con corchetes []"); 

    //array ["Samsum", "Apple"]
    const llaves = ["marca","color","procesador"]; //cuando una propiedad no existe en un obj, esta idefinido


    //propiedades 
    const telefono ={
        marca : "Samsumg",
        color: "rosa"
    }

    llaves.forEach((llave) => {


    console.log(`
    La llave : ${llave}
    tiene el valor ${telefono[llave]}
    `)
    });