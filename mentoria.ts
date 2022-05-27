//TODO
// apply solid
// add use case for cnpj 2 with a new flag isOn, when isOn is true tax should be 0.015, on isOn is false, tax should be 0.23
// add use case for cpf3 and cnpj3 which should sum tax instead of reducing cpf 0.4 cnpj 0.34
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

type Taxavel = {
  nome: string;
};

const taxes: any = {
  cpf1: (valor: number) => 0.05 * valor,
  cpf2: 0.07,
  cpf3: 0.4,
  cnpj1: 0.01,
  cnpj2: {
    isOn: 0.015,
    isOff: 0.23,
  },
  cnpj3: 0.34,
};

// let resultadoEsperado = 9300;
//let resultadoEsperado = 4925; // isOn = true; cnpj2
let resultadoEsperado = 7000; // isOn = false; cnpj2
let valorInput = 5000;
const isOn = false;
const taxType = "cpf3";
// let valorInput = 5000;
// let resultadoEsperado = 4750;
let resultadoObtido;
main();
if (resultadoObtido == resultadoEsperado) {
  console.log("Resultado: deu boa");
} else {
  console.log("Resultado: deu ruim");
}

function inputTela() {
  //ui logic
  const taxavalAtual: Taxavel = {
    nome: taxType,
  };

  return { taxavalAtual, valor: valorInput, isOn: isOn };
  //return { tipo: "cpf1", valor: 5000 };
}

function outputTela(valor: number) {
  //ui logic
  resultadoObtido = valor;
  console.log("valor final:", valor);
}

function calculaImposto(valor: number, taxavel: Taxavel, isOn: boolean) {
  console.log(`tipo: ${taxavel.nome}`);
  let tax = getTax(taxavel.nome, isOn);
  return valor * tax;
}

function getTax(nome: string, isOn: boolean) {
  return nome !== "cnpj2" ? taxes[nome] : getTaxCnpj2(isOn);
}

function getTaxCnpj2(isOn: boolean) {
  return isOn ? taxes["cnpj2"].isOn : taxes["cnpj2"].isOff;
}

function calculaRetorno() {
  const { taxavalAtual, valor, isOn } = inputTela();
  let impostoaReceber = 0;
  console.log("calculando valor");
  console.log("taxavel: ", taxavalAtual);
  impostoaReceber = calculaImposto(valor, taxavalAtual, isOn);
  ["cnpj3", "cpf3"].includes(taxavalAtual.nome)
    ? outputTela(valor + impostoaReceber)
    : outputTela(valor - impostoaReceber);
  return;
}

function main() {
  calculaRetorno();
}
