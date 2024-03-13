// arreglos  arrays (matrices)
const frutas = ["fresa", "manzana", "pera", "cereza", "kiwi", "melon"]; 
const numeros = [1, 12, 3, 4, 20, 15, 7, 8]; /* los elementos en un arreglo (string) van separados por una coma si no existe la coma se entiende que son juntos, por ejemplo la pera con la manzana */
const test = [frutas[8], frutas]

const example = [test, [numeros, frutas], frutas]

console.log(frutas [2]) /* me va a devolver a pera por que esa es su posicion  empieza siempre desde el cero */
console.log(numeros) /*me va a dar el 12 por que empieza desde el cero */
console.log(example [1] [0][1]) /* estoy llamando solo a numeros que se encuentra en example, luego el cero me devuelve a toda la linea por que tengo tmb frutas, y el 1 es el número que quiero en mi línea considerando que se empieza de 0, el cero se pone aunque este solito por que es un arreglo y se debe de contemplar así, hay que aprender a leer los arreglos*/


//objetos

/* a diferencia de los arreglos (que tienen las posiciones definidas por numeros)  arriba tenemos tenemos Clave K y valor acá podemos definir el valor de la clave*/

const precios = {
    course: 4990,
    carrera: 3990,
    master: 2990,
    }

console.log(precios.master); /*me va a dar el precio de master por que yo le asígne clave y valor*/

