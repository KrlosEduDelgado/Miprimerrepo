console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000);

Promise.resolve().then(() => console.log(3))

console.log(4);

//Primero resuelve el sincrono, luego las microtask que son las promesas y ya al final el asincron los callbacks