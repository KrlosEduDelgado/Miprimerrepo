/// estructura de datos de una tienda de impresoras
const carrito = []

const impresora1 = {
    id: 1,
    titulo: "Impresora Multifuncional Epson Ecotank L3260",
    precio: 5800,
    foto: "https://http2.mlstatic.com/D_NQ_NP_672092-MLU75666783476_042024-O.webp",
}

const impresora2 = {
    id: 2,
    titulo: "Multifuncional Hp Ink Advantage 2875,inyección De Tinta,wifi",
    precio: 7800,
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_970903-MLU73452276707_122023-F.webp",
}

const impresora3 = {
    id: 3,
    titulo: "Impresora multifunción Canon imageCLASS D1620 con wifi blanca y negra 120V - 127V",
    precio: 13000,
    foto: "https://http2.mlstatic.com/D_NQ_NP_997422-MLA40080811342_122019-O.webp",
}

const storeImpresoras = [
    impresora1,
    impresora2,
    impresora3, // buena practica    
]
/* { style: 'currency', currency: 'EUR' } */
function priceFormat (number) {
    return  new Intl
    .NumberFormat('es-MX', { maximumSignificantDigits: 3, style: "currency", currency: "MXN" })
    .format(number)
}

/* <button onclick="addToCarrito(impresora)">Añadir a carrito</button> */
function showProducts (){
    // pinta toda la lista
    const parent = document.querySelector("#productos-container")
    // iteramos el storeImpresoras
    storeImpresoras.forEach((impresora) => {
        // creamos un div 
        const productDiv = document.createElement("div")
        /* productDiv.classList.add("product")     */        
        // añadimos la estructura
        productDiv.innerHTML = `
        <div class="product">
            <img src="${impresora.foto}">
            <h2>${impresora.titulo}</h2>
            <p>Precios: ${priceFormat(impresora.precio)}</p>            
            <button id="add-to-cart" data-id="${impresora.id}">Añadir a carrito</button>
            <span>⭐</span>
        </div>
        `
        parent.appendChild(productDiv)
    })
}

// permite que todo el dom este listo
// PARA VER QUE BOTON LE DOY CLICK
document.addEventListener("DOMContentLoaded", () => {
    // Node LIST
    const allButtons = document.querySelectorAll("#add-to-cart")
    // interando
    allButtons.forEach((button) => {
        button.addEventListener('click', function(evento){
            const dataID = evento.target.getAttribute("data-id")
            console.log(dataID)
            // busar el elemento dentro de los productos que coresponda al dataID === id
            // crear una nueva estructura  que permita manejar el carrito            
            const productDeCarrito = {
                fechaCreacion: new Date(),
                productId: dataID,
                cantidad: 1
            }

            addToCarrito(productDeCarrito)
        })
    })
})

showProducts()


// pintar todos los productos del carrito
function showCarritoProductos(){

}


// donde voy a guardar lo que quiero comprar carrito
// reducer => // objetos Globales
function addToCarrito (producto) {
    carrito.push(producto)
    console.log("carrito", carrito)
}

function removeToCarrito () {

}

function updateCarrito () {
    // ya existe el id? 
      //si => actualizo la cantidad
      //no => no hagas nada    
}

function cleanCarrito () {

}