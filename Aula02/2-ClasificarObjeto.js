const cliente ={
    nombre: "sofia",
    edad:36,
    ciudad:"Ciudad de México",
   
   //Encapsular/unir elementos del mismo tipo=arreglos
    telefono:["55 1444 4131", "55 551444 7836"],
    
    // Objeto anidado para agrupar datos relacionados con la ubicación
    //clasificando un objeto dentro de otro objeto(), objetos anidados
    direccion:{
        calle:"Avenida Chapultepec",
        numero: 367,
        pais:"México",
        edificio:true
    }

}

//llamando un objeto dentro de otro objetos
console.log(cliente.direccion.pais);
console.log(cliente); 