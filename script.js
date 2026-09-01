let botaoSomar = document.querySelector("#somar");
let botaoSubtrair = document.querySelector("#subtrair");
let botaoMultiplicar = document.querySelector("#multiplicar");
let botaoDividir = document.querySelector("#dividir");

let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");

let resultado = document.querySelector("#resultado");
let botaoLimpar = document.querySelector("#limpar");

// Pega os valores digitados e transforma em números
function pegarNumeros() {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);

  return { n1, n2 };
}

// Verifica se os dois valores são números válidos
function validarNumeros(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = "Digite os dois números";

    return false;
  }

  return true;
}

// Soma
botaoSomar.addEventListener("click", function () {
  let { n1, n2 } = pegarNumeros();

  if (!validarNumeros(n1, n2)) {
    return;
  }

  let soma = n1 + n2;

  resultado.textContent = soma;
});

// Subtrair
botaoSubtrair.addEventListener("click", function () {
  let { n1, n2 } = pegarNumeros();

  if (!validarNumeros(n1, n2)) {
    return;
  }

  let subtracao = n1 - n2;

  resultado.textContent = subtracao;
});

// Multiplicar
botaoMultiplicar.addEventListener("click", function () {
  let { n1, n2 } = pegarNumeros();

  if (!validarNumeros(n1, n2)) {
    return;
  }

  let multiplicacao = n1 * n2;

  resultado.textContent = multiplicacao;
});

// Dividir
botaoDividir.addEventListener("click", function () {
  let { n1, n2 } = pegarNumeros();

  if (!validarNumeros(n1, n2)) {
    return;
  }

  if (n2 === 0) {
    resultado.textContent = "Não é possível dividir por zero";

    return;
  }

  let divisao = n1 / n2;

  resultado.textContent = divisao;
});

// Limpar
botaoLimpar.addEventListener("click", function () {
  numero1.value = "";
  numero2.value = "";

  resultado.textContent = "0";
});
