const cliente ={
    nombre: "sofia",
    edad:36,
    Ciudad:"Ciudad de México",
   
   //Encapsular/unir elementos del mismo tipo=arreglos
    telefono:["55 1444 4131", "55 551444 7836"],
    
    
    //clasificando un objeto dentro de otro objeto
    direccion:{
        calle:"Avenida Chapultepec",
        numero: 367,
        pais:"México",
        Edificio:true
    }

}

//llmando un objeto dentro de otro objetos
console.log(cliente.direccion.pais);
console.log(cliente); 