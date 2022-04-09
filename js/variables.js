const producto = document.querySelector("#producto")
const hora = document.querySelector("#hora")
const fecha = document.querySelector("#fecha")
const btnGuardar = document.querySelector("#guardar")
const btnLimpiar = document.querySelector("#limpiar")
const tbody = document.querySelector("tbody") //selecciono tbody

let cursos = []
let arrayServicios = ""
//json

const URL = "servicios.json"