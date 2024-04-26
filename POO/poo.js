const cesar = {
    nombre: "",
    apellido: "",
    calificacionFinal: 0,
    inscrito: "",
};

const fecha = new Date().getFullYear();
console.log(fecha);

// crear clase

class Persona {
    //atributos del objeto
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }

    // metodos del objeto
    fullName (){
        return `${this.nombre} ${this.apellido} `;
    }
}

const cesarClass = new Persona("Cesar","Vivas")
console.log(cesarClass); /* Este devuelve atributos y el otro es metodos */
console.log(cesarClass.fullName());

//Herencia
 