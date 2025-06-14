/* Parte de adicionar tarefas */
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuario = JSON.parse(localStorage.getItem("usuario"))


let novaTarefa = document.querySelector("#novaTarefa")
let btnAdicionar = document.querySelector(".adicionartarefa")
let btnTodas = document.querySelector(".todas")
let btnPendentes = document.querySelector(".pendentes")
let btnConcluidos = document.querySelector(".feitas")

let listaTarefas = document.querySelector(".listaTarefas")

function semTarefas(mensagem){
    const divSem = document.createElement("div")
    divSem.className = "bloco"

    const p = document.createElement("p")
    p.innerHTML = mensagem
    
    divSem.appendChild(p)
    listaTarefas.appendChild(divSem)
}

function listarTarefas() {
    listaTarefas.innerHTML = ' '

    for (let i=0; i<usuario.tarefas.length; i++){
        let nomeTarefa = usuario.tarefas[i].nomeTar
        let verifConc = usuario.tarefas[i].concluida

        //Criando o div de tarefas
        const divTarefa = document.createElement("div")
        divTarefa.className = "tarefa"

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = verifConc

        const titulo = document.createElement("h5")
        titulo.innerHTML = nomeTarefa

        if(checkbox.checked) {
            titulo.style.textDecoration = 'line-through';
        }

        checkbox.addEventListener("change", () => {
            usuario.tarefas[i].concluida = checkbox.checked;

            const index = usuarios.findIndex(usu => usu.email === usuario.email);
            if (index !== -1) {
                usuarios[index] = usuario;
            }

            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            if(checkbox.checked) {
                titulo.style.textDecoration = 'line-through';
            } else {
                titulo.style.textDecoration = 'none';
            }
        });
        
        divTarefa.appendChild(checkbox)
        divTarefa.appendChild(titulo)
        listaTarefas.appendChild(divTarefa)
    }

    if (listaTarefas.innerHTML == ' '){
        semTarefas("Adicione Sua Primeira Tarefa")
    } 
}

listarTarefas()

function adicionarTarefa(){
    const tarefa = {
        nomeTar: novaTarefa.value,
        concluida: false
    }
    
    const index = usuarios.findIndex(usu => usu.email === usuario.email)
    if (index !== -1) {
        usuarios[index] = usuario
    }

    usuario.tarefas.push(tarefa)
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarTarefas()
}

btnAdicionar.addEventListener("click", () => {
    adicionarTarefa()
})

btnTodas.addEventListener("click", () => {
    listarTarefas()
})

btnPendentes.addEventListener("click", () => {
    listaTarefas.innerHTML = ' '

    for (let i=0; i<usuario.tarefas.length; i++){
        let nomeTarefa = usuario.tarefas[i].nomeTar
        let verifConc = usuario.tarefas[i].concluida

        if(!verifConc){
            const divTarefa = document.createElement("div")
            divTarefa.className = "tarefa"

            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.checked = verifConc

            const titulo = document.createElement("h5")
            titulo.innerHTML = nomeTarefa

            if(checkbox.checked) {
                titulo.style.textDecoration = 'line-through';
            }

            checkbox.addEventListener("change", () => {
                usuario.tarefas[i].concluida = checkbox.checked;

                const index = usuarios.findIndex(usu => usu.email === usuario.email);
                if (index !== -1) {
                    usuarios[index] = usuario;
                }

                localStorage.setItem("usuario", JSON.stringify(usuario));
                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                if(checkbox.checked) {
                    titulo.style.textDecoration = 'line-through';
                } else {
                    titulo.style.textDecoration = 'none';
                }
            });
            
            divTarefa.appendChild(checkbox)
            divTarefa.appendChild(titulo)
            listaTarefas.appendChild(divTarefa)
        }
        
    }

    if (listaTarefas.innerHTML == ' '){
        semTarefas("Sem tarefas pendentes!")
    }
})

btnConcluidos.addEventListener("click", () => {
    listaTarefas.innerHTML = ' '

    for (let i=0; i<usuario.tarefas.length; i++){
        let nomeTarefa = usuario.tarefas[i].nomeTar
        let verifConc = usuario.tarefas[i].concluida

        if(verifConc){
            const divTarefa = document.createElement("div")
            divTarefa.className = "tarefa"

            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.checked = verifConc

            const titulo = document.createElement("h5")
            titulo.innerHTML = nomeTarefa

            if(checkbox.checked) {
                titulo.style.textDecoration = 'line-through';
            }

            checkbox.addEventListener("change", () => {
                usuario.tarefas[i].concluida = checkbox.checked;

                const index = usuarios.findIndex(usu => usu.email === usuario.email);
                if (index !== -1) {
                    usuarios[index] = usuario;
                }

                localStorage.setItem("usuario", JSON.stringify(usuario));
                localStorage.setItem("usuarios", JSON.stringify(usuarios));

                if(checkbox.checked) {
                    titulo.style.textDecoration = 'line-through';
                } else {
                    titulo.style.textDecoration = 'none';
                }
            });
            
            divTarefa.appendChild(checkbox)
            divTarefa.appendChild(titulo)
            listaTarefas.appendChild(divTarefa)
        }
        
    }

    if (listaTarefas.innerHTML == ' '){
        semTarefas("Sem tarefas concluídas!")
    }
})