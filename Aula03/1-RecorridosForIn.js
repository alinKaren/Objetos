    // Un objeto es una colección de propiedades (datos) y métodos (funciones).

    const cliente ={
        nombre: "sofia",
        edad:36,
        ciudad:"Ciudad de México",

    //objetos anidados(agrupar) dentro del arreglo:
    telefonos: [
        { tipo: "casa", numero: "55 1444 4131" },
        { tipo: "celular", numero: "55 551444 7836" }
    ],

    direccion:{
            calle:"Avenida Chapultepec",
            numero: 367,
            pais:"México",
            edificio:true
        }

    }


    //los arreglos en javascript tambien son considerados objetos
    for(let propiedad in cliente){
        let tipo =typeof cliente[propiedad];
        if (tipo !== "object" && tipo !== "function"){
        console.log(`la propiedad ${propiedad} : tiene el valor ${cliente[propiedad]}\n`);
        }
    }