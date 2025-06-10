/*Botões*/
let btnCadastrar = document.querySelector(".btnCadastrar")

/*Inputs*/
let usuNome = document.querySelector("#usuNome")
let usuEmail = document.querySelector("#usuEmail")
let usuSenha = document.querySelector("#usuSenha")
let usuConfSenha = document.querySelector("#usuConfSenha")

/*Div de mensagens*/
let divMensagem = document.querySelector(".divMensagem")
let pMensagem = document.querySelector(".pMensagem")

/*Função para verificar se os campos das senhas são iguais*/
let verificarSenha = (senha, confSenha) => {
    if (senha != confSenha){
        if(caixaErro.style.display == "none"){
            divMensagem.setAttribute('id', 'divErro')
            pMensagem.innerText = "As senhas nos dois campos devem ser iguais!"
            divMensagem.style.display = "block"
        }
    } 
    else{
        divMensagem.style.display = "none"
    }

}

/*Gerar um id para cada usuário*/
function gerarIdUnico() {
    let ultimoId = parseInt(localStorage.getItem("ultimoIdUsuario")) || 0;
    ultimoId++;
    localStorage.setItem("ultimoIdUsuario", ultimoId);
    return ultimoId;
}

/*Cadastrar novo usuário*/
function cadastrarUsuario (nome, email, senha){
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const novoUsuario = {
        id: gerarIdUnico(),
        nome,
        email,
        senha,
        tarefas: []
    }

    usuarios.push(novoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

btnCadastrar.addEventListener("click", () => {
    cadastrarUsuario(usuNome.value, usuEmail.value, usuSenha.value)
    alert("Usuário cadastrado com sucesso!")

    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/login.html";
    }, 2000);
})