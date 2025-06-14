let usuarios = JSON.parse(localStorage.getItem("usuarios"))
let usuario = JSON.parse(localStorage.getItem("usuario"))

let btnSair = document.querySelector("#btnSair")
let btnExcluir = document.querySelector("#btnExcluir")

let inputNome = document.querySelector("#usuNome")
let inputEmail = document.querySelector("#usuEmail")
let pTarefasOK = document.querySelector(".pTarefasOK")
let pTarefasPen = document.querySelector(".pTarefasPen")

const nome = usuario.nome
const email = usuario.email

inputNome.value = nome
inputEmail.value = email

let contPendentes=0
let contConcluidas=0
for(chave of usuario.tarefas){
    let verifConf = chave.concluida
    if(chave.concluida == true){
        contConcluidas++
    } else {
        contPendentes++
    }
}

pTarefasOK.innerText = contConcluidas
pTarefasPen.innerText = contPendentes

btnSair.addEventListener("click", () => {
    localStorage.setItem("usuario", JSON.stringify({}))
    alert("Saindo do sistema...")
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/login.html";
    }, 1000);
})

btnExcluir.addEventListener("click", () => {
    const confirmacao = confirm("Deseja excluir realmente?")
    if (confirmacao){
        localStorage.setItem("usuario", JSON.stringify({}))
        let id = usuario.id
        lista = usuarios.filter(usuario => usuario.id !== id)
        localStorage.setItem("usuarios", JSON.stringify(lista))
        alert("Excluindo usuário...")
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/login.html";
        }, 1000);
    }
    
})