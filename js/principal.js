const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (usuarios == []){
    alert("Não possuem usuários cadastrados, seja o primeiro!")
} 



