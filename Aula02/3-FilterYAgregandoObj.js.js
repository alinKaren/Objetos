    ///Para poder acceder a los metodos de arreglos, debes convertir 
    //en arreglo el objeto con [], observa direccion:[{


    const cliente ={
        nombre: "sofia",
        edad:36,
        ciudad:"Ciudad de México",
    
    //Encapsular/unir elementos del mismo tipo=arreglos
        telefono:["55 1444 4131", "55 551444 7836"],
        
        
        //clasificando un objeto dentro de otro objeto
        direccion:[
            {
                calle:"Avenida Chapultepec",
                numero: 367,
                pais:"México",
                edificio:true
            },
            {
                calle: "Insurgentes Sur", 
                numero: 458,
                pais:"México",
                edificio: false
            }
        ]

    }

    //agregado un objeto con el metodo del arreglo push 
    cliente.direccion.push({  
                calle:"Periferico", 
                numero:310,
                pais:"México",
                edificio: true
            })


    //llamando un objeto dentro de otro objetos
   // console.log(cliente.direccion);  

    const listaSoloEdificio = cliente.direccion.filter((direccion) => direccion.edificio== true);

    console.table(listaSoloEdificio);   
