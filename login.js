const msg = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("username");
const senha = document.getElementById("password");

formulario.onsubmit = (evt) => {
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados) {
        let logado = false;

        dados.forEach((elemento) => {
            if (elemento.emailcliente === email.value && elemento.senhacliente === senha.value) {
                msg.innerHTML = "Aguarde redirecionando...";
                setTimeout(() => {
                    window.location.assign("cadastroitem.html");
                }, 2000);
                evt.preventDefault();
                logado = true;
                return true;
            }
        });

        if (!logado) {
            msg.innerHTML = "Usuário ou senha incorretos";
            evt.preventDefault();
            return null;
        }
    }
};