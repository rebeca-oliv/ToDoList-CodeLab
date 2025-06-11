/* Parte de adicionar tarefas */
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuario = JSON.parse(localStorage.getItem("usuario"))


let novaTarefa = document.querySelector("#novaTarefa")
let btnAdicionar = document.querySelector(".adicionartarefa")

function listarTarefas() {
    let listaTarefas = document.querySelector(".listaTarefas")
    listaTarefas.innerHTML = ' '

    for (chave of usuario.tarefas){
        let nomeTarefa = chave.nomeTar
        let verifConc = chave.concluida

        //Criando o div de tarefas
        const divTarefa = document.createElement("div")
        divTarefa.className = "tarefa"

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        const titulo = document.createElement("h5")
        titulo.innerHTML = nomeTarefa
        
        divTarefa.appendChild(checkbox)
        divTarefa.appendChild(titulo)
        listaTarefas.appendChild(divTarefa)
    }

    if (listaTarefas.innerHTML == ' '){
        const divSem = document.createElement("div")
        divSem.className = "bloco"

        const p = document.createElement("p")
        p.innerHTML = "Adicione Sua Primeira Tarefa"
        
        divSem.appendChild(p)
        listaTarefas.appendChild(divSem)
    } 
}

listarTarefas()

function adicionarTarefa(){
    const tarefa = {
        nomeTar: novaTarefa.value,
        concluida: false
    }
    
    const index = usuarios.findIndex(u => u.email === usuario.email)
    if (index !== -1) {
        usuarios[index] = usuario
    }

    usuario.tarefas.push(tarefa)
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarTarefas()
    alert("Tarefa cadastrada com sucesso!")
}

btnAdicionar.addEventListener("click", () => {
    adicionarTarefa()
})

