console.log("Herencia")

class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar (){
        console.log(`Hola soy ${this.nombre}`)
    }
    caminar (){
        console.log(`Yo, ${this.nombre}, estoy caminando`)
    }
}

let p1 = new Persona("Diego","Lopez", 10)
console.log(p1)

// extends sirve para traer las propiedades de la super clase
class Alumno extends Persona {
    constructor(nombre, apellido, edad, calificacion){
        super(nombre,apellido, edad); /* solo  se manda lo que ya existe en la primer clase*/
        this.calificacion = calificacion;
        this.escuela = "Escuela niños heroes"; /** va a ser la misma escuela para todos por eso no se pasa arriba*/
    }  /* Todos los metodos de la super clase son heredados, no son necesarios de jalarse acá ya se heredena */
    reprobar(){
        console.log("Reprobé por wey");
    }
}

let a1 = new Alumno("Julio", "Cortes", 20, 90)
console.log(a1);
a1.saludar();
a1.reprobar();
// el super evita hacer el this por lo que veo 

let a2 = new Alumno("Carlos", "Merida", 21, 90)
console.log(a2);

class Empleado extends Persona {
    constructor(nombre, apellido, edad, antiguedad, salario){
        super(nombre, apellido, edad);
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.ahorro = 1000
    }
    gastar(cantidad){
        this.ahorro = this.ahorro - cantidad
    }
}

let empleado1 = new Empleado("Joaqin", "Mendez", 35, 10, 15000)
console.log(empleado1);
empleado1.saludar();
empleado1.caminar();
empleado1.gastar(200);

class Profesor extends Empleado {
    constructor(nombre, apellido, edad, antiguedad, salario, materia){
        super(nombre,apellido, edad, antiguedad, salario);
        this.materia = materia;
    }
}

let profe1 = new Profesor ("Mike", "Guzman", 45, 3, 25000, "Matematicas");
console.log(profe1);
profe1.gastar(50);


// Prototipos  no le entendi pero vamos a calarlos
