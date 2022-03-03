const mezcla= 100000
const master= 150000
const grabacion= 80000
const produccion= 90000


function calculadora() {
    let Horas = prompt("Ingresa el número de horas que necesitas el estudio :")
    let operador = prompt("Tipo de operación a realizar: \n Mezcla = 1 \n Masterización = 2 \n Grabación = 3 \n Producción = 4 ")
        if (!isNaN(Horas) && !isNaN(operador)) {
            let resultado =  obtenerCalculo(Horas, operador)
            let moneda = (new Intl.NumberFormat().format(resultado))
            console.log(moneda)
            console.log("El resultado del cálculo, es:", resultado)
            console.log(typeof resultado);
            alert("Hola!\nTu sesión cuesta: $" + moneda);

            document.getElementById("Resultado").innerHTML = "$"+ moneda
            document.getElementById("Horas").innerHTML = Horas
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