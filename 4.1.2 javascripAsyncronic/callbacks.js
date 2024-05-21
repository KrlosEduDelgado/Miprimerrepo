/* function saludar (nombre) {
    alert (`hola ${nombre}`)
}

function despedir (nombre) {
    alert (`adios ${nombre}`)
}


function procesarEntradaUsuario (callback){
    let nombre = prompt(`Por favor dame tu nombre`)
    callback(nombre);
} 

procesarEntradaUsuario ((nombre) => alert (`hola ${nombre}`)
 );
*/
/*
const soyCien = () => 100;
const soyDoscientos = () => 200;

const sumaDosFunciones = (callback1, callback2) => {
    const suma = callback1 + callback2;
    return suma;
}

console.log (sumaDosFunciones (soyCien (), soyDoscientos()));
*/
/*
setTimeout(() => console.log("Han pasado 5 segundo"), 5000);

navigator.geolocation.getCurrentPosition (
    (position) => console.log(position),
    (err) => console.error(err)
)
*/
setTimeout(() => {
    console.log("Han pasado 5 segundo")
    setTimeout (() =>{
        console.log("Han pasado 5 segundo")
    },5000)
}, 5000)