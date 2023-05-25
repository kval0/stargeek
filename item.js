const titulo = document.getElementById("titulo");
const resumo = document.getElementById("resumo")
const foto = document.getElementById("foto")
const botao = document.getElementById("btn")

botao.onclick = (evento) => {
    evento.preventDefault();
    fenvio()
    .then(result => {
        if(result) {
            let dados = JSON.parse(localStorage.getItem("catalogo")) || []; 
    dados.push (
                {
                    nome : titulo.value,
                    resumo : resumo.value,
                    foto: nomeArq 
                }
                )
    localStorage.setItem("catalogo", JSON.stringify(dados));
        }
        else {
            alert("Houve um erro no envio do arquivo");
        }
    });
    
}

var nomeArq; 

async function fenvio() {
    const url = "http://localhost:3005/upload";
    const arquivo = document.getElementById("foto").files[0];
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    console.log(JSON.stringify(formData));
    try {
        var resp = await fetch(url, {
                                    method: 'POST',
                                    body: formData,
                                    }
                            )
        if (resp.ok) {
            let respText = await resp.text();
            nomeArq = respText;
            return true;
        }
        else {
            return false;
        }
        }
    catch (error) {
        console.error(error);
        return false;
        }
}