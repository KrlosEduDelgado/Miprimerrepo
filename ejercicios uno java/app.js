/*
// 1 Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
const respuesta = prompt ("Eres bellisimo/a")

if (respuesta.toLowerCase () === "si"){
    alert("Ciertamente");
} else if (respuesta.toLowerCase () === "no") {
    alert ("No te creo")
}


// 2 Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

const numero = prompt ("Ingrese un número")
if (numero % 2 === 0 ){
    alert("tu numero es divisible entre 2");
} else if (numero % 2 === 1) {
    alert ("tu numero no es divisible entre 2")
}

//3 Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

const numeroPar = prompt ("Ingrese un número")
if (numeroPar % 2 === 0 ){
    alert("es un numero par");
} else if (numeroPar % 2 === 1) {
    alert ("tu numero es impar")
}

//4 Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

const numeroCliente = prompt ("Ingrese su número de cliente")
if (numeroCliente === "1000" ){
    alert("Ganaste un premio");
} else if (numeroCliente ) {
    alert ("Lo sentimos, sigue participando")
}

// 5  Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

const numeroUno = prompt ("Ingrese el primer número");
const numeroDos = prompt ("Ingrese el segundo número");
if (numeroUno < numeroDos ){
    alert("El primero número ingresado ("+ numeroUno +") es menor que el segundo");
} else if (numeroDos < numeroUno) {
    alert ("El segundo número ingresado ("+ numeroDos +") es menor que el primero");
}

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

const numero1 = prompt ("Ingrese el primer número");
const numero2 = prompt ("Ingrese el segundo número");
const numero3 = prompt ("Ingrese el tercer número");
if (numero1 > numero2 && numero1 > numero3 ){
    alert("El primero número ingresado ("+ numero1 +") es mayor que el segundo y el tercero");
} else if (numero2 > numero3 && numero2 > numero1) {
    alert ("El segundo número ingresado ("+ numero2 +") es mayor que el primero y el tecero");
} else if (numero3 > numero1 && numero3 > numero2) {
    alert ("El tercer número ingresado ("+ numero3 +") es mayor que el primero y el segundo");
}


// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const diaSemana = prompt ("Ingrese el día de la semana")
//const sanitize = diaSemana.trim().toLocaleLowerCase();
if (diaSemana === "lunes") {
    alert("Feliz inicio de Semana");
} else if (diaSemana === "viernes") {
    alert("Ya terminaste la semana");
} else if (diaSemana === "sabado", "domingo") {
    alert("Disfrua tu fin de semana")
} else if (diaSemana === "martes", "miercoles", "jueves"); {
    alert("Estas en el ombligo de las semana también disfruta y estudia programación")
}
//Este problema no me salía con el if lo tuve que buscar para resolver de otra forma y me sirvió el switch 
// Con este metodo tuve muchos problemas por eso no lo deje




// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const diaSemana = prompt ("Ingrese el día de la semana").toLocaleLowerCase();
switch (diaSemana){
    case "lunes":
         alert("Feliz inicio de Semana");
         break;
    case "viernes":
        alert("Ya terminaste la semana")
        break;
    case "sabado":
    case "domingo":
        alert("disfruta tu fin de semana")
        break;
    case "martes":
    case "miercoles":
    case "jueves":
        alert ("estas en el ombligo de semana")        
}

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es

const calificacion = prompt ("Ingresa tu calificacion");
if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion <6){
        alert("reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        alert("regular");
    } else {
        alert("bien");
    }
} else { 
    alert("error: la calificacion debe de estar entre 1 y 10")
}
*/

/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

const topping = prompt ("Qué topping prefieres (oreo, KitKat, brownie)").toLocaleLowerCase();
const precioHelado = 50
const precioOreo = 10
const precioKitKat = 15
const precioBrownie = 20

switch (topping){
    case "oreo":
         alert(precioHelado + precioOreo);
         break;
    case "KitKat":
        alert(precioHelado + precioKitKat)
        break;
    case "brownie":
        alert(precioHelado + precioBrownie)
        break;      
}
*/


/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */ 

const curso = Number(
    prompt (
        "Qué curso te gustaría tomar: \n1. master, \n2. carrera \n3. course"
        )
);

const beca = Number (
    prompt (
    "Con que beca cuentas \n1. Facebook, \n2. Google, \n3. Jesua o \n4. ninguna")
);

function calcularCostoCurso(curso, beca) {
    let costoMensual = 0;
    
    if (curso === 1) {
        costoMensual = 2999;
    } else if (curso === 2) {
        costoMensual = 3999;
    } else if (curso === 3) {
        costoMensual = 4999;
    }


    if (beca === 1) {
        costoMensual -= costoMensual * 0.2;
    } else if (beca === 2) {
        costoMensual -= costoMensual * 0.15;
    } else if ( beca === 3) {
        costoMensual -= costoMensual * 0.5;
    } else if (beca === 4) {
        costoMensual;
    }

    return costoMensual;
}

function calcularCostoTotal (curso, costoMensual) {
let costoFinal = 0

if (curso === 1) {
    costoFinal = costoMensual * 12;
} else if (curso === 2) {
    costoFinal = costoMensual * 6;
} else if (curso === 3) {
    costoFinal = costoMensual * 2;
}

return costoFinal;
}

const costoMensualConDescuento = calcularCostoCurso(curso, beca);
const costoTotal = calcularCostoTotal(curso, costoMensualConDescuento);

console.log("el costo mensual del programa es: " + costoMensualConDescuento);

console.log(
    "el costo total del programa seleccionado es: " + costoTotal
);














//condicional for lo repite cuantas veces se le declare y le agregando uno más

/* for (var i = 0; i <= 10; i = i + 1) {
    console.log(i)
}  */


