let num = Number(prompt("Digite um número inteiro:"));

if (!Number.isInteger(num)) {
  console.log("Entrada inválida: digite um número inteiro.");
} else {

  if (num > 0) {
    console.log(num + " é positivo.");
  } else if (num < 0) {
    console.log(num + " é negativo.");
  } else {
    console.log("O número é zero.");
  }

  
  let paridade = Math.abs(num) % 2 === 0 ? "par" : "ímpar";
  console.log(num + " é " + paridade + ".");

  let primo;

  if (num <= 1) {
    primo = false;
  } else if (num === 2) {
    primo = true;
  } else if (num % 2 === 0) {
    primo = false;
  } else {
    primo = true;
    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) {
        primo = false;
        break;
      }
    }
  }

  console.log(num + (primo ? " é primo." : " não é primo."));
}