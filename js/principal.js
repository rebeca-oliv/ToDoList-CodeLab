/*Inputs*/
let usuEmail = document.querySelector("#usuEmail")
let usuSenha = document.querySelector("#usuSenha")

/* Parte de login */

let btnLogin = document.querySelector(".btnLogin")

/*Pegando a lista de usuários no localStorage*/
const usuarios = JSON.parse(localStorage.getItem("usuarios"));

let usuLogado = -1

function encontrarUsuario(email, senha){
    for (chave of usuarios){
        if (chave.email ==  email && chave.senha == senha){    
            usuLogado = chave.id
            return usuLogado
        }
    }
}

btnLogin.addEventListener("click", () => {
    encontrarUsuario(usuEmail.value, usuSenha.value)
    if (usuLogado != -1){
        let idUsuLogado = encontrarUsuario(usuEmail.value, usuSenha.value)
        alert("Entrando no sistema!")
        setTimeout(() => {
                window.location.href = "http://127.0.0.1:5500/principal.html";
        }, 2000);
    } 
    else{
        if(chave.email == usuEmail.value && chave.senha != usuSenha.value){
            alert("Senha incorreta!")
        }
        else{
            alert("Usuário não cadastrado.")
        }
    }
})

/* Parte de adicionar tarefas */

let novaTarefa = document.querySelector(".novaTarefa")

let btnAdicionar = document.querySelector(".adicionartarefa")

btnAdicionar.addEventListener("click", () => {
    const novaTarefa = {
        nomeTar: novaTarefa.value,
        concluida: false
    }

    usuarios[usuLogado-1].tarefas.push(novaTarefa);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Tarefa cadastrada com sucesso!")
})

