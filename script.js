let botaoSomar = document.querySelector("#somar");
let botaoSubtrair = document.querySelector("#subtrair");
let botaoMultiplicar = document.querySelector("#multiplicar");
let botaoDividir = document.querySelector("#dividir");

let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");

let resultado = document.querySelector("#resultado");
let botaolimpar = document.querySelector("#limpar");

botaoSomar.addEventListener("click", function somar() {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);
  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite os dois números";
    return;
  }

  let soma = n1 + n2;
  resultado.textContent = soma;
});

botaoSubtrair.addEventListener("click", function subtrair() {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);
  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite os dois números";
    return;
  }

  let subtrair = n1 - n2;
  resultado.textContent = subtrair;
});

botaoMultiplicar.addEventListener("click", function multiplicar() {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);
  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite os dois números";
    return;
  }

  let multiplicar = n1 * n2;
  resultado.textContent = multiplicar;
});

botaoDividir.addEventListener("click", function dividir() {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);

  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite os dois números";
    return;
  }

  if (n2 === 0) {
    resultado.textContent = "Não é possível dividir por zero";
  } else {
    let divisao = n1 / n2;
    resultado.textContent = divisao;
  }
});

botaolimpar.addEventListener("click", function limpar() {
  numero1.value = "";
  numero2.value = "";
  resultado.textContent = "0";
});
