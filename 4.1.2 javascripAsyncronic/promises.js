const resolverAfter = () => {
    return new Promise((resolve, reject) => {
        let valor = true;
        setTimeout (() => {
            return valor ? resolve ("Resuelto") : reject ("Rechazado")
        }, 2000);
    })
}

const asynCall = async () => {
    try {
        console.log("Llamando a la promesa");
        const result = await resolverAfter ();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

asynCall ()

