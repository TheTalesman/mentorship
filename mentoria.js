//TODO
// apply solid
// add use case for cnpj 2 with a new flag isOn, when isOn is true tax should be 0.015, on isOn is false, tax should be 0.23
// add use case for cpf3 and cnpj3 which should sum tax instead of reducing cpf 0.4 cnpj 0.34
// add some ingenous  use case
// apply types?
// apply hexagon?
// apply ddd?
var getNumberFromMap = function (taxType, isOn) {
    if (isOn === undefined) {
        return taxType;
    }
    return taxType["" + (isOn ? "isOn" : "isOff")];
};
var taxes = {
    cpf1: 0.05,
    cpf2: 0.07,
    cpf3: 0.4,
    cnpj1: 0.01,
    cnpj2: {
        isOn: 0.015,
        isOff: 0.23
    },
    cnpj3: 0.34
};
// let resultadoEsperado = 9300;
//let resultadoEsperado = 4925; // isOn = true; cnpj2
var resultadoEsperado = 7000; // isOn = false; cnpj2
var valorInput = 5000;
var isOn = false;
var taxType = "cpf3";
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
        nome: taxType
    };
    return { taxavalAtual: taxavalAtual, valor: valorInput, isOn: isOn };
    //return { tipo: "cpf1", valor: 5000 };
}
function outputTela(valor) {
    //ui logic
    resultadoObtido = valor;
    console.log("valor final:", valor);
}
function calculaImposto(valor, taxavel, isOn) {
    console.log("tipo: " + taxavel.nome);
    var tax = getTax(taxavel.nome, isOn);
    return valor * tax;
}
function getTax(nome, isOn) {
    return nome !== "cnpj2" ? getNumberFromMap(taxes[nome]) : getTaxCnpj2(isOn);
}
function getTaxCnpj2(isOn) {
    return getNumberFromMap(taxes["cnpj2"], isOn);
}
function calculaRetorno() {
    var _a = inputTela(), taxavalAtual = _a.taxavalAtual, valor = _a.valor, isOn = _a.isOn;
    var impostoaReceber = 0;
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
