let lista = ""
const tablaListado = document.querySelector("#listado")

const cargoArrayDeCursos = () => {
    //debugger
    //Recupero lo almacenado en LS
    if (localStorage.getItem("listadoDeCursos") != null) {
        cursos = JSON.parse(localStorage.getItem("listadoDeCursos"))
        
        //y lo cargo en la tabla
        for (curso of cursos) {
            lista += `<tr>
                          <td class="textleft">${curso.producto}</td>
                          <td class="text-right">${curso.hora}</td>
                          <td class="text-right">${curso.fecha}</td>
                      </tr>
                      `
        }
        tablaListado.innerHTML = lista
    }
}

cargoArrayDeCursos()