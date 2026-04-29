    const cliente = {
        nombre: "Sofia", 
        email: "sofia@gmail.com", 
         telefonos:["55 1444 6893", "551444 9999"],
            
            direccion:{
                calle: "Avenida Reforma",
                numero:222,
                pais:"Mexico",
                apartamento:true
                    }
    }

    function llamarCliente(telefonoUno,telefonoDos){
        console.log(`llamando a ${telefonoUno}`);
        console.log(`llamando a ${telefonoDos}`);
    }

    llamarCliente(cliente.telefonos[0],cliente.telefonos[1]); 

    console.log("\n  ----------Spread Opreator------------- \n ");


    //Spread Operator: Saca cada elemento del arreglo o agrupador {} y 
    // lo pone en los lugares de la función uno por uno.
    //te ahorró tener que escribir [0] y [1]?
    //  Es súper útil cuando no sabes cuántos elementos tiene el arreglo


    llamarCliente(...cliente.telefonos);

    //Spread Operator ...
    //console.log(...cliente.telefonos)

    const pedido = {
        cliente: cliente.nombre, 
        //calle: cliente.direccion.calle, //para no estar manualmente propiedad por propiedad de dirreccion se puede solo dejar ...cliente.direccion
        ...cliente.direccion
    }

    console.log(pedido);