const mezcla= 100000
const master= 150000
const grabacion= 80000
const produccion= 90000

const servicios = ['Mezcla', 'Masterización', "Grabación", "Producción"]
const carrito= []

const listadoservicios = document.getElementById ("listadoservicios")
const listadocarrito = document.getElementById ("listadocarrito")

const totalGrabacion = document.getElementById("totalGrabacion")
const HorasReserva = document.getElementById ("HorasReserva")
const fechaReserva = document.getElementById ("fechaReserva")


const btnCotiza = document.querySelector("#CotizaBtn")
const mis_servicios = document.querySelector ("ul")

//cargamos el array de servicios

const cargarServicios =() => {
    
    for (servicio of servicios){
        const liServicio=document.createElement ("li") 
            liServicio.className = "mis_servicios"
            liServicio.innerText = servicio //innexText para modificiar texto
            liServicio.setAttribute("onclick", `agregarAlCarrito('${servicio}')`)
            //liServicio.addEventListener ("click", ()=> {
            //    agregarAlCarrito(servicio) por qué este no agregaba los servicios que son?
            //})
            
            listadoservicios.append (liServicio) //append para agregar al array
            liServicio.addEventListener("mousemove", cursor) //evento mousemove para cambiar a manito
            //liServicio.addEventListener ("click", agregarAlCarrito(servicio)) esto se podrá?
    }
}

//agregar al carrito
const agregarAlCarrito = (serv) => { 
    
    if (serv > "") {
        const id = serv + "enCarrito" //ID aquí se asigna
        const liCarrito = document.createElement("li")
        liCarrito.innerText = serv
        liCarrito.id = id //ID dinámico
        liCarrito.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`)
        listadocarrito.append(liCarrito)
    }
}
//Para crear la opción de eliminar del carrito, debemos generar un ID dinámico
//al momento de crear un <li> por cada producto agregado al Carrito.
const eliminarDelCarrito = (productoID) => { //Usen el DEBUGGER para seguir el código paso a paso
    if (confirm("¿Desea eliminar el producto del carrito?")) {
        const itemAeliminar = document.getElementById(productoID)
        itemAeliminar.remove()
        return
    }
}

cargarServicios()
//creación evento boton cotiza

btnCotiza.addEventListener("click", ()=> {
    calculadora()
    
    
})



function cursor() {
    document.getElementById("listadoservicios").style.cursor = "pointer";
}



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

            totalGrabacion.innerText = "El total de la grabación es:"
            document.getElementById("Resultado").innerHTML = "$"+ moneda
            
            HorasReserva.innerText = "Número de horas a reservar:"
            document.getElementById("Horas").innerHTML = Horas
            
            fechaReserva.innerText = "Fecha de la Reserva:"
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