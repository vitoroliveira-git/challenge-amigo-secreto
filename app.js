let amigos = []

function adicionarAmigo(){
    let amigo = document.querySelector("input").value;
    console.log(amigo);
    if (amigo == ""){
        alert("Por favor, insira um nome.");
    }else{
        amigos.push(amigo);
        console.log(`O amigo ${amigo} foi adicionado na lista`, amigos);
        document.querySelector("input").value = "";
        atualizarListaDeAmigos();
    }
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        console.log('Esta lista está vazia')
    }else{
        let random = Math.floor(Math.random() * amigos.length);
        console.log(amigos[random]);
        exibirNaTela("resultado", `O amigo secreto sorteado foi: ${amigos[random]}`)
        amigos = [];
        atualizarListaDeAmigos();
    }   
}

function exibirNaTela(tag,texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}