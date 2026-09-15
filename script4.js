let n1 = Number(prompt("Digite a 1ª nota (peso 2):"));
let n2 = Number(prompt("Digite a 2ª nota (peso 3):"));
let n3 = Number(prompt("Digite a 3ª nota (peso 5):"));

if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
  console.log("Entrada inválida: digite apenas números.");
} else {
  let p1 = 2;
  let p2 = 3;
  let p3 = 5;

  let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

  console.log("Média ponderada: " + media.toFixed(2));

  if (media >= 7) {
    console.log("Situação: Aprovado");
  } else if (media >= 5) {
    console.log("Situação: Recuperação");

    let exame = Number(prompt("Digite a nota do exame:"));

    if (Number.isNaN(exame)) {
      console.log("Nota do exame inválida. Operação cancelada.");
    } else {
      let novaMedia = (media + exame) / 2;
      console.log("Nova média: " + novaMedia.toFixed(2));

      if (novaMedia >= 6) {
        console.log("Resultado final: Aprovado após exame");
      } else {
        console.log("Resultado final: Reprovado após exame");
      }
    }
  } else {
    console.log("Situação: Reprovado");
  }
}