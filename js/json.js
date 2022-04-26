const guardoDatosJSON = () => {
    
    Swal.fire({
        title: "Servicio agregado al carrito",
        icon: 'success'

    })
    valor = valorSelect.value//obtener valor del input
    console.log(valor)
    
    datosFormulario = { producto: valor.trim(), hora: parseInt(hora.value), fecha: (fecha.value) }
    cursos.push(datosFormulario)
    localStorage.setItem("listadoDeCursos", JSON.stringify(cursos))
    console.info("Se ha almacenado el curso en LocalStorage.")
    ()
    limpioCampos()
    
    fetch(URL)
    
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log(data)
            console.log(cursos)
            switch (curso.producto) {
                case 'Mezcla':
                    console.info("hi")
                    const TotalMezcla= parseInt(curso.hora)*60000
                    console.log(TotalMezcla)
                case 'Masterización':
                    console.info ("master")
                    const TotalMaster= parseInt(curso.hora)*70000
                    console.log(TotalMaster)

                case 'Producción':
                    console.info ("producción")
                    const TotalProd= parseInt(curso.hora)*80000
                    console.log(TotalProd)

                case 'Grabación':
                    console.info ("grabación")
                    const TotalGrab= parseInt(curso.hora)*100000
                    console.log(TotalGrab)
                    
            
                default:
                    break;
            }
            
        })
    

    
    
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
btnLimpiar.addEventListener("click", ()=> {
    Swal.fire({
        title: "Vas a eliminar los productos de tu carrito ¿Quieres continuar?",
        icon: 'warning',
        showCancelButton: true,
        /* confirmButtonText: "Si",
        cancelButtonText: "No!" */
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> SI!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i> NO!',
        cancelButtonAriaLabel: 'Thumbs down'
    }).then((result)=> {
        result.isConfirmed ?
        localStorage.clear() :
        producto.focus()
    })
    
        
    

})
/* const limpiarLS = ()=> {
    const resp = confirm("¿Realmente desea eliminar todo lo almacenado en LocalStorage?")
    if (resp)
        localStorage.clear()
    console.warn("Se han eliminado todos los elementos de LocalStorage.")
}
btnLimpiar.addEventListener("click", () => limpiarLS()) */