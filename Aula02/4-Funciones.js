
            const cliente = {
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
                //A las funciones se le conoce también como métodos.
                efectuarPago:function(precioProduto){
                    if(precioProduto<=this.saldo){

                        console.log("Realizano el cobro")
                        this.saldo -= precioProduto;

                        console.log(`Pago exitoso. Saldo restante: ${this.saldo}`);
                    
                    }else{
                        console.log("Saldo Insuficiente para esta compra.");
                }
                }
            }

                cliente.efectuarPago(20)
