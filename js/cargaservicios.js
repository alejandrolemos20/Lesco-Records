
const obtenerDatos = () => {
    fetch(URL)
        .then(response =>
            response.json()
        )
        .then(data => {
            arrayServicios = data
            cargarServiciosTabla()
        })

}

const cargarServiciosTabla = () => {
    let detalleTabla = ""
    arrayServicios.forEach(servicios => {
        detalleTabla += `<tr>
                            <td>${servicios.servicio}</td>
                            <td>${servicios.costohora}</td>
                         </tr>`
    })
    tbody.innerHTML = detalleTabla
}

document.addEventListener("DOMContentLoaded", obtenerDatos)

// BONUS TRACK: MISMA VERSION, PERO ASINCRÓNICA
// const obtenerDatosAsync = async ()=> {
//       const respuesta = fetch(URL)
//       const arrayContactos = await respuesta.json()
//             cargoGrillaContactos()
// }
