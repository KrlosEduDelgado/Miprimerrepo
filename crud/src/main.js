import { jedis, titles } from"./db.js"

console.log(jedis)

const titlesTable = document.querySelector("#titlesTable");

// Lo ideal que  los template string (componentes) sean funciones




//Forma de prevenir y verificar que si esta chido
window.addEventListener("DOMContentLoaded", function () {
    console.log("ready to DOM")

    const titlesHtml = titles.map(title => thC({title})).join("");

    titlesTable.innerHTML = titlesHtml;
})