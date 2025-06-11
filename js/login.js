/*Inputs*/
let usuEmail = document.querySelector("#usuEmail")
let usuSenha = document.querySelector("#usuSenha")

/* Parte de login */

let btnLogin = document.querySelector(".btnLogin")

/*Pegando a lista de usuários no localStorage*/
let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuario;

if(localStorage.getItem("usuario")){
    usuario = JSON.parse(localStorage.getItem("usuario"))
}

function encontrarUsuario(email, senha){
    let contador = 0
    for (chave of usuarios){
        if (chave.email ==  email && chave.senha == senha){ 
            let usuLogado = JSON.parse(localStorage.getItem("usuarios"))
            localStorage.setItem("usuario", JSON.stringify(usuLogado[contador]))
            return 1
        }
        contador++
    }
    return 0
}

btnLogin.addEventListener("click", () => {
    let encontrou = encontrarUsuario(usuEmail.value, usuSenha.value)
    if (encontrou){
        encontrarUsuario(usuEmail.value, usuSenha.value)
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