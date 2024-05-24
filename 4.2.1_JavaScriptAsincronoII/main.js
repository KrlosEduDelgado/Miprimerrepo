let promesaTiempoCongelado = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log(`Contador terminado`);
        let edad = 19;
        if(edad > 18){
            resolve(`Es mayor de edad, puede manejar`);
        } else { 
            reject (`No es mayor de edad, no puede manejar`);
        }        
    }, 2000)
});
/*
//Puede recibir 2 parametros, El primero es una función que se va a ejecturar en caso de que la rpromesa se cumpla y el segundo puede ser una función que se ejecute en caso de que la promesa falle
promesaTiempoCongelado.then((valorDeResolucion) => {
    console.log(`El contador termino de ejecturse`);
    console.log(valorDeResolucion);
    let promesaTiempoCongelado2 = new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Contador terminado`);
            resolve (`Todo OK`);
        }, 2000)
    });
    promesaTiempoCongelado2.then((valorDeAceptacion) => {
        console.log(`Contador 2 terminado`);
        console.log(valorDeAceptacion)
    })
}, (valorDeRechazo) => {
    console.log(`La promesa fallo`);
    console.log(valorDeRechazo)
});
*/
// forma de anidar promesas
 
promesaTiempoCongelado1.then((valorDeAceptacion) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Contador 2 terminado`);
            resolve (`Todo ok en la promesa 2`);
            reject(`Fallo en la promesa 2`);
        }, 2000);
    });
}).then((valorDeAceptacionPromesa2) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Contador 3 terminado`);
            resolve (`Todo ok en la promesa 3`)
        }, 2000);
    });
}).then((valorDeAceptacionPromesa3) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`Contador 4 terminado`);
            resolve (`Todo ok en la promesa 4`)
        }, 2000);
    });
}).catch((valorDeRechazo) => {
    console.log(`alguna de las promesas fallo`)
    console.log(valorDeRechazo);
});    
// el catch se ejecuta cuando alguno falla, recibe los errores