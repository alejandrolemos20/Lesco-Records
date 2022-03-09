const mezcla= 100000
const master= 150000
const grabacion= 80000
const produccion= 90000

const servicios = ['Mezcla', 'Masterización', "Grabación", "Producción"]

function calculadora() {
    const dia =prompt ("Ingresa el día de tu reserva")
    const mes =prompt ("Ingresa el número correspondiente al mes de tu reserva (Enero = 0 Diciembre = 11 ")
    const año =prompt ("Ingresa el año de tu reserva")
    let Horas = prompt("Ingresa el número de horas que necesitas el estudio :")
    let operador = prompt("Tipo de operación a realizar: \n Mezcla = 1 \n Masterización = 2 \n Grabación = 3 \n Producción Musical = 4")
        if (!isNaN(Horas) && !isNaN(operador)) {
            let resultado =  obtenerCalculo(Horas, operador)
            let moneda = (new Intl.NumberFormat().format(resultado))
            const fecha = (new Date (año, mes, dia))
            console.log(moneda)
            console.log("El resultado del cálculo, es:", resultado)
            console.log(typeof resultado);
            alert("Hola!\nTu sesión cuesta: $" + moneda);
            console.log (new Date (año, mes, dia))
            agregarServicio ()
            document.getElementById("Resultado").innerHTML = "$"+ moneda
            document.getElementById("Horas").innerHTML = Horas
            document.getElementById("Fecha").innerHTML = fecha
        } else {
            console.error("Error: ¡Ambos valores ingresados deben ser numéricos!")
        }
}

function obtenerCalculo(Horas, operador) { 
    //debugger
    if (operador != null && operador != undefined && operador != "") {
        switch (operador) {
            case "1":
                return parseInt(Horas) * mezcla
            case "2":
                return parseInt(Horas) * master
            case "3":
                return parseInt(Horas) * grabacion
            case "4":
                return parseInt(Horas) * produccion  

        }
    } else {
        return "¡Error!"
    }
}
function agregarServicio() {
    const servicioadicional = prompt("¿Te gustaría cotizar algún servicio adicional que no esté arriba?: \n Sí = 1 \n No = 2")
    if (servicioadicional != null && servicioadicional != undefined && servicioadicional != "") {
        switch (servicioadicional) {
            case "1":
                const nuevoServicio = prompt("Ingrese el servicio que desea agregar:")
                const buscar = servicios.some (element => element === nuevoServicio)
                const buscar2 = servicios.find (element => element === nuevoServicio)
                const resultadoServicio = servicios.includes(nuevoServicio)
                if (resultadoServicio) {
                    alert("El Servicio ingresado " + nuevoServicio + " ya existe en el array.");
                    console.warn("El Servicio ingresado", nuevoServicio, "ya existe en el array.")
                    console.log (buscar)
                    console.log (buscar2)
                    agregarServicio ()
                    
                }
                else {
                    servicios.push(nuevoServicio)
                    console.table(servicios)
                    console.info("ℹ️ ", nuevoServicio, "se agregó exitosamente.")
                    alert("Se ingresó tu cotización adicional al sistema, ve al formulario de la parte de abajo para terminar el proceso");
                }
            case "2":
                alert("Gracias vuelve pronto!");
                console.info("ℹ️ ", "Gracias vuelve pronto!")
                break;
        }
    } else {
        return "¡Error!"
    }
    
    
}