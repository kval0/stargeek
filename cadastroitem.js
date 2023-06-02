const botaomodal = document.getElementById("btn");
const cards = document.getElementById("cards");
const mensagem = document.querySelector(".mensagem")

var emaillogado;
femaillogado();

carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("tr");
    if(dados == null){
        mensagem.innerHTML = "nenhum item cadastrado"
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado) {
        let divcard = document.createElement("tr");
        divcard.innerHTML = `<td><img class="capa-filme" src="img/${elemento.foto}" alt="Capa do filme"></td>
        <td>${elemento.nome}</td>
        <td>${elemento.descricao}</td>
        <td>
          <button class="botao-editar" onclick="editarFilme(${indice})">Editar</button>
          <button class="botao-excluir" onclick="excluirFilme(${indice})">Excluir</button>
        </td>`;
        
        cards.appendChild(divcard); }
        
    });
}

function excluirFilme(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editarFilme(indice){
    var url ="item.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

botaomodal.onclick = () =>{
    window.location.assign("cadastro.html");
}

function femaillogado() {
    let dados = sessionStorage.getItem("logado");
    if (dados == null) {
        window.location.assign("login2.html");
    } else {
        emaillogado = dados;
    }
}

    function sair() {
        sessionStorage.clear();
        window.location.assign("login2.html");
    }