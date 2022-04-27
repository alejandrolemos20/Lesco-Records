let lista = ""
const tablaListado = document.querySelector("#listado")
const total = document.getElementById("total");

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
                          <td class="text-right">${curso.precio}</td>
                      </tr>
                      `
        }
        tablaListado.innerHTML = lista
    }
    
    let totalAPagar = cursos.reduce((acu,curso)=>{ return acu + curso.precio * curso.hora},0);
        console.log(totalAPagar)    
    total.innerHTML = '$'+totalAPagar;
}

cargoArrayDeCursos()