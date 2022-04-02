const guardoDatos = ()=> {
    localStorage.setItem("producto", producto.value.trim())
    localStorage.setItem("hora", hora.value)
    localStorage.setItem("fecha", fecha.value)
}

const recuperoDatos = ()=> {
    if (localStorage.length > 0) {
        producto.value = localStorage.getItem("producto")
        hora.value = localStorage.getItem("hora")
        fecha.value = localStorage.getItem("fecha")
    }
}

//si quiero recorrer localStorage y ver si existe un ítem en particular
const recorrerLS = ()=> {
    for (let i = 0; i < localStorage.length; i++)
        console.log(localStorage.key(i))
}

//si quiero limpiar LocalStorage por completo
/* const limpiarLS = ()=> {
    const resp = confirm("¿Realmente desea eliminar todo lo almacenado en LocalStorage?")
    if (resp)
        localStorage.clear()
    console.warn("Se han eliminado todos los elementos de LocalStorage.")
} */

recuperoDatos()