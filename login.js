const msg = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const email = document.getElementById("username");
const senha = document.getElementById("password");

formulario.onsubmit = (evt) => {
    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado;
    dados.forEach((elemento) => {
        if (elemento.emailcliente == email.value && elemento.senhacliente == senha.value) {
            msg.innerHTML = "Aguarde redirecionando..."
            evt.preventDefault();
            sessionStorage.setItem("logado", email.value);
            setTimeout(() => {
                window.location.assign("cadastroitem.html");
            }, 2000);
            evt.preventDefault();
            logado = "ok";
            return true;
        }
        if (logado != "ok") {
            msg.innerHTML = "Usuario ou senha incorretos"
            evt.preventDefault()
            return null;
        }
    });
}