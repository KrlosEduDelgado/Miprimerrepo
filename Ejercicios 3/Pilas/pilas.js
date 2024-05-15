// Ejercicio 1

function extraerElementos (pila, cantidad){
    if (pila.length === 0 || cantidad === 0) {
        return [];
}

const elementosExtraidos = [];

for (let i = 0; i < cantidad; i++) {
    if (pila.length > 0) {
        elementosExtraidos.push(pila.pop());
    } else {
        break;
    }
}
return elementosExtraidos;
}
const frutas = ["Manzana","Cebolla","Apio","Naranja","Papaya","Sandía","Melón"];

const cantidadElementos = 4;

const elementosExtraidos = extraerElementos(frutas, cantidadElementos);

console.log("Elementos extraídos:", elementosExtraidos);
console.log("Pila despues de la extracción:", frutas)

//ejercicio 2

/* Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

function reemplazar(pila, nuevo, viejo) {
    let encontrado = false;
    let nuevaPila = [];
    
    while (pila.length > 0) {
        let elemento = pila.pop();
        if (!encontrado && elemento === viejo) {
            nuevaPila.push(nuevo);
            encontrado = true;
        } else {
            nuevaPila.push(elemento);
        }
    }
    
    while (nuevaPila.length > 0) {
        pila.push(nuevaPila.pop());
    }
}

// Ejemplo de uso
let pila = [3,2,3,4,6,8,1,2,5,5];
reemplazar(pila, 7, 2); 
console.log(pila);


// ejercicio 3 

/*  3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.

Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino

Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
 */

const recorrido = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "Destino"];
console.log("array1:", recorrido); 

const regreso = recorrido.reverse();
console.log("Regreso:", regreso);

// Ejercicio 4

/*  4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.*/

const almacenContenido = ["Conte1", "Conte2", "Conte3", "Conte4"];
const agregando = almacenContenido.push("Conte5","Conte6");
console.log(agregando);
console.log(almacenContenido);

// para sacar sería con .pop lo mismo