const guardoDatosJSON = () => {
    datosFormulario = { producto: producto.value.trim(), hora: parseInt(hora.value), fecha: (fecha.value) }
    cursos.push(datosFormulario)
    localStorage.setItem("listadoDeCursos", JSON.stringify(cursos))
    console.info("Se ha almacenado el curso en LocalStorage.")
    limpioCampos()
    
}

btnGuardar.addEventListener("click", () => guardoDatosJSON())

const limpioCampos = () => {
    producto.value = ""
    hora.value = 0
    fecha.value = 0
}

const cargoCurso = (array) => {
    producto.value = array.producto
    hora.value = array.precio
    fecha.value = array.stock
}

const recuperoArrayJSON = () => {//para poder seguir cargando otros Cursos
    if (localStorage.getItem("listadoDeCursos") != null)
        cursos = JSON.parse(localStorage.getItem("listadoDeCursos"))
}

recuperoArrayJSON()

const buscarCurso = () => {
    busco = prompt("Ingrese el curso a buscar:")
    if (busco.trim() > "") {
        resultado = cursos.find(c => c.producto.includes(busco))
        //debugger
        if (resultado != undefined) {
            cargoCurso(resultado) //si volvió algo de la búsqueda, lo muestro en pantalla
        } else {
            alert("No se encontraron resultados para la búsqueda.")
        }
    }
}
const limpiarLS = ()=> {
    const resp = confirm("¿Realmente desea eliminar todo lo almacenado en LocalStorage?")
    if (resp)
        localStorage.clear()
    console.warn("Se han eliminado todos los elementos de LocalStorage.")
}
btnLimpiar.addEventListener("click", () => limpiarLS())