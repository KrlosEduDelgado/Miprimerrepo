console.log("hola mundo")
/*
valores de verdad
tablas de verdad

and (&&) esto devuelve true si todas son true
v-v= v
v-v-f= f


or (//) esto devuelve false si todas son false
f-f= f
f-f-v=v
*/

/*const isPositive = 1 > 3
console.log(typeof isPositive);*/

/*
if (10===10 && 10 !==0) {


} 

if (10===10) {

} 

else {

}
*/

const pregunta = prompt("¿eres bellisimo/a");
const sanitize = pregunta.trim().toLocaleLowerCase();  /*esto es para que independientemente de que se escriba en mayusculas o en espacios reconozca la respuesta*/
if (pregunta === "si") {
    console.log("Ciertamente")
} else {
    console.log("No te creo")
}

