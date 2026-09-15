let preco = Number(prompt("Digite o preço base do produto:"));
let vipResposta = prompt("Cliente é VIP? (sim/não):").toLowerCase();
let cupom = prompt("Digite o cupom (ou deixe em branco):");
let parcelas = Number(prompt("Número de parcelas:"));

if (Number.isNaN(preco) || Number.isNaN(parcelas) || !Number.isInteger(parcelas) || parcelas < 1) {
  console.log("Entrada inválida.");
} else {
  let vip = vipResposta === "sim";
  let precoComDesconto = preco;


  if (vip) {
    precoComDesconto = preco * 0.8; 
  } else if (preco > 150) {
    precoComDesconto = preco * 0.9;
  }


  if (cupom === "PROMO10") {
    precoComDesconto = precoComDesconto * 0.9; 
  }

  let imposto = precoComDesconto * 0.12;
  let totalComImposto = precoComDesconto + imposto;


  if (parcelas > 3) {
    totalComImposto = totalComImposto * 1.02;
  }

  let valorParcela = totalComImposto / parcelas;

  console.log("Preço com descontos: " + precoComDesconto.toFixed(2));
  console.log("Imposto: " + imposto.toFixed(2));
  console.log("Preço final (com imposto e taxa, se houver): " + totalComImposto.toFixed(2));
  console.log("Valor por parcela (" + parcelas + "x): " + valorParcela.toFixed(2));
  console.log("typeof do resultado final:", typeof totalComImposto);
}