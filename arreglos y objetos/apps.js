//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
const numerosAzar = [7, 10, 13, 15, 25, 1, 8, 20, 54, 3]
const arregloVacio = [numerosAzar]
console.log(arregloVacio[0])

//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
const randomString = prompt ("Ingresa una lista de strings separados por una coma")
const arrayStrings = randomString.split(',')
console.log("el array ingresado es:", arrayStrings);

//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const arregloTres = [10, 40, 30, 20 , 15 ,5];
arregloTres.sort(function(a, b) {
    return a - b
});

const menor = Math.min(...arregloTres);
const mayor = Math.max(...arregloTres);

console.log("Arreglo ordenado de menor a mayor:", arregloTres);
console.log("Número menor:", menor);
console.log("Número mayor:", mayor);





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

