const producto = document.querySelector("#SelectServicios")
const hora = document.querySelector("#hora")
const fecha = document.querySelector("#fecha")
const btnGuardar = document.querySelector("#guardar")
const btnLimpiar = document.querySelector("#limpiar")
const tbody = document.querySelector("tbody") //selecciono tbody
valorSelect = document.getElementById("SelectServicios")

let cursos = []
let arrayServicios = ""
//json

const URL = "servicios.json"