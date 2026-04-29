
        const cliente ={
            nombre: "sofia",
            edad:36,
            ciudad:"Ciudad de México",
        
        //Encapsular/unir elementos del mismo tipo en arreglos
            telefono:["55 1444 4131", "55 551444 7836"],
            
            
            //clasificando un objeto dentro de otro objeto con arreglos
            direccion:[
                {
                    calle:"Avenida Chapultepec",
                    numero: 367,
                    pais:"México",
                    edificio:true
                },
            ],
            saldo:200,
            efectuarpago:function(valor){
            console.log(valor)
            }
            }

            cliente.efectuarpago(20);
