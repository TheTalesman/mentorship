//TODO
// apply solid
// add use case for cnpj 2 with a new flag isOn, when isOn is true tax should be 0.015, on isOn is false, tax should be 0.23
// add use case for cpf3 and cnpj3 which should sum tax instead of reducing cpf3 = 0.4 cnpj3 = 0.34
// add some ingenous  use case
// apply types?
// apply hexagon?
// apply ddd?

// Princípio de única responsabilidade[1]
//     "uma classe deve ter apenas uma única responsabilidade (mudanças em apenas uma parte da especificação do software, devem ser capaz de afetar a especificação da classe)."
// Princípio de aberto/fechado[2]
//     "entidades de software devem ser abertas para extensão, mas fechadas para modificação."
// Princípio da substituição de Liskov
//     "objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa." deve ser capaz de afetar apenas a especificação da classe
// Princípio da segregação de Interface[3]
//     "muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos."
// Princípio da inversão de dependência [4]
//     "deve-se depender de abstrações, não de objetos concretos."

//let resultadoEsperado = 4750;
let resultadoEsperado = 7000;
let resultadoObtido;

main();
if (resultadoObtido == resultadoEsperado) {
  console.log("Resultado: deu boa");
} else {
  console.log("Resultado: deu ruim");
}

function inputTela() {
  //ui logic
  return { tipo: "cpf3", valor: 5000, isOn: false };
}

function outputTela(valor: number) {
  //ui logic
  resultadoObtido = valor;
  console.log("valor final:", valor);
}

function calculaRetorno() {
  const { tipo, valor, isOn } = inputTela();
  let impostoaReceber = 0;
  console.log("calculando valor");
  console.log("tipo: ", tipo);
  if (tipo === "cpf1") {
    impostoaReceber = valor * 0.05;
    console.log("taxa: 0.5");
  }
  if (tipo == "cpf2") {
    impostoaReceber = valor * 0.07;
    console.log("taxa: 0.7");
  }
  if (tipo == "cpf3") {
    impostoaReceber = valor * 0.4;
    console.log("taxa: 0.4");
    resultadoObtido = valor + impostoaReceber;
    return;
  }
  if (tipo === "cnpj") {
    impostoaReceber = valor * 0.01;
    console.log("taxa: 0.01");
  }
  if (tipo === "cnpj2") {
    if (isOn) {
      impostoaReceber = valor * 0.015;
    } else {
      impostoaReceber = valor * 0.23;
    }
  }
  if (tipo === "cnpj3") {
    impostoaReceber = valor * 0.34;
    console.log("taxa: 0.34");
    resultadoObtido = valor + impostoaReceber;
    return;
  }

  resultadoObtido = valor - impostoaReceber;
  return;
}

function main() {
  calculaRetorno();
}
