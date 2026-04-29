    const cliente = {
        nombre: "Sofia", 
        email: "sofia@gmail.com", 
         telefonos:["55 1444 6893", "551444 7777"],
            
            direcion:{
                calle: "Avenida Reforma",
                numero:222,
                pais:"Mexico",
                apartamento:true
                    }
    }

    const llavesDelObj = Object.keys(cliente); //convierte el objeto en arreglo, se puede ver en resultados y podemos usar metodos de arreglos
//En el if el "!" si NO incluye direccion entonces haz 
    if (!llavesDelObj.includes("direccion")){

        console.log("Error, Es necesario tener una direccion")

    }