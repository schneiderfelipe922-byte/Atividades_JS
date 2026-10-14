// Caixa: muda a cor ao clicar e o texto ao passar o mouse.
const caixa = document.getElementById("caixa");
let corAlterada = false;

caixa.addEventListener("click", function () {
    corAlterada = !corAlterada;

    if (corAlterada) {
        caixa.style.backgroundColor = "lightgreen";
    } else {
        caixa.style.backgroundColor = "lightblue";
    }
});

caixa.addEventListener("mouseenter", function () {
    caixa.textContent = "Mouse está aqui!";
});

caixa.addEventListener("mouseleave", function () {
    caixa.textContent = "Clique aqui para mudar a cor!";
});

// Teclado: mostra a tecla pressionada e confirma o texto com Enter.
const texto = document.getElementById("texto");
const tecla = document.getElementById("tecla");

texto.addEventListener("keydown", function (evento) {
    tecla.textContent = "Você pressionou: " + evento.key;

    if (evento.key === "Enter") {
        alert("Texto enviado: " + texto.value);
    }
});

// Contador: funciona com os botões e com as setas do teclado.
const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
let numero = 0;

function aumentar() {
    numero++;
    contador.textContent = numero;
}

function diminuir() {
    numero--;
    contador.textContent = numero;
}

incrementar.addEventListener("click", aumentar);
decrementar.addEventListener("click", diminuir);

document.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowUp") {
        evento.preventDefault();
        aumentar();
    }

    if (evento.key === "ArrowDown") {
        evento.preventDefault();
        diminuir();
    }
});
