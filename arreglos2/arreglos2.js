const palindromo = "anita lava la tina"

const isPalindrome = function (palindromo){
    const arryString = palindromo.split(" ") /*se deja un espacio para que identifique el espacio como separador */
    
    const normal =arryString.join("")
    
    const reverse =normal.split("").reverse().join("")
    console.log(reverse)

    if (normal === reverse) {
        console.log("es un palindromo")
    }

} 
// sort agrupa como si los numero fueran letras todos los 1 con los 1 y así ordenamiento lexográfico, sirve más paara letras en el codigo ASCII
// sort puede crear números random 
const numeros = [1,8,15,9,3,4,2,95,82,34,157]
 console.log(numeros,"original");
console.log(numeros.sort(),"con sort");

//funcion normalita  tenemos el this
//tenemos holsting ayuda para llamar al principio aunque este declarada en la linea trece
function numerosSort () {
    console.log("holsting")
    return "hola"
}

//funciones flecha ventaja es que tienee el return implicito no tiene this y tampoco holsting
const numerosSortFlecha = () => {}


/*
const letras = ["G","d","a","c","u","t","A"]
console.log(letras,"original");
console.log(letras.sort(),"con sort");
*/
//acomoda de forma ascendente el siguiente array usando sort
const numeros2 = [255,430,66,79,24,3,8,5]
const listaAscendente = numeros2.sort((a,b) => a - b)
console.log(listaAscendente, "lista")

// find que busque numeros iguales a 5, encuentra un valor que cumpla con la condicion 
// si no hay valores que cumplan con la condicion retorna un undefined
const numerosConCinco = numeros2.find((numeros2) => numeros2 === 5)
console.log(numerosConCinco, "numeros con 5")