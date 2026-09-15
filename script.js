
const valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
const respostaVip = prompt("Você é um cliente VIP? (sim/não)");
const codigoCupom = prompt("Digite o cupom, se houver:");
const parcelas = parseInt(prompt("Em quantas vezes deseja parcelar?"), 10);

const ehVip = respostaVip.trim().toLowerCase() === "sim";
const temCupom = codigoCupom.trim().toUpperCase() === "PROMO10";

let valorFinal = valorCompra;


if (ehVip) {
    valorFinal *= 0.80; 
} else if (valorCompra > 150) {
    valorFinal *= 0.90;
}


if (temCupom) {
    valorFinal *= 0.90; 
}


if (parcelas > 3) {
    valorFinal *= 1.02; 
}

alert(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);
````