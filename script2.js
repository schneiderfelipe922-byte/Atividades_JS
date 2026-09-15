let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log("Entrada inválida: digite apenas números.");
} else {
  let soma = a + b;
  let diferenca = a - b;
  let produto = a * b;
  let divisao, resto;

  if (b === 0) {
    divisao = "Erro: divisão por zero";
    resto = "Erro: divisão por zero";
  } else {
    divisao = a / b;
    resto = a % b;
  }

  console.log("Soma:", soma, "| typeof:", typeof soma);
  console.log("Diferença:", diferenca, "| typeof:", typeof diferenca);
  console.log("Produto:", produto, "| typeof:", typeof produto);
  console.log("Divisão:", divisao, "| typeof:", typeof divisao);
  console.log("Resto:", resto, "| typeof:", typeof resto);

  if (a > b) {
    console.log("O maior é o primeiro valor: " + a);
  } else if (b > a) {
    console.log("O maior é o segundo valor: " + b);
  } else {
    console.log("Os dois valores são iguais.");
  }
}