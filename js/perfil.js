let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuario = JSON.parse(localStorage.getItem("usuario"))

let inputNome = document.querySelector("#usuNome")
let inputEmail = document.querySelector("#usuEmail")
let pTarefasOK = document.querySelector(".pTarefasOK")
let pTarefasPen = document.querySelector(".pTarefasPen")

const nome = usuario.nome
const email = usuario.email

inputNome.value = nome
inputEmail.value = email

let contador = 0
for (chave of usuario.tarefa){
    contador++
}