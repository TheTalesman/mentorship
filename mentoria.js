//TODO
// apply solid
// add use case for cnpj 2 with a new flag isOn, when isOn is true tax should be 0.015, on isOn is false, tax should be 0.23
// add use case for cpf3 and cnpj3 which should sum tax instead of reducing
// add some ingenous  use case
// apply types?
// apply hexagon?
// apply ddd?
var tax = { cpf1: 0.05, cpf2: 0.07, cnpj1: 0.01 };
var resultadoEsperado = 9300;
var valorInput = 10000;
// let valorInput = 5000;
// let resultadoEsperado = 4750;
var resultadoObtido;
main();
if (resultadoObtido == resultadoEsperado) {
    console.log("Resultado: deu boa");
}
else {
    console.log("Resultado: deu ruim");
}
function inputTela() {
    //ui logic
    var taxavalAtual = {
        nome: "cpf2"
    };
    return { taxavalAtual: taxavalAtual, valor: valorInput };
    //return { tipo: "cpf1", valor: 5000 };
}
function outputTela(valor) {
    //ui logic
    resultadoObtido = valor;
    console.log("valor final:", valor);
}
function calculaImposto(valor, taxavel) {
    console.log("tipo: " + taxavel.nome);
    return valor * tax[taxavel.nome];
}
function calculaRetorno() {
    var _a = inputTela(), taxavalAtual = _a.taxavalAtual, valor = _a.valor;
    var impostoaReceber = 0;
    console.log("calculando valor");
    console.log("taxavel: ", taxavalAtual);
    impostoaReceber = calculaImposto(valor, taxavalAtual);
    outputTela(valor - impostoaReceber);
    return;
}
function main() {
    calculaRetorno();
}
