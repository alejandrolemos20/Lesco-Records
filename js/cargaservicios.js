
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
