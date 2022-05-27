//TODO
// apply solid
// add use case for cnpj 2 with a new flag isOn, when isOn is true tax should be 0.015, on isOn is false, tax should be 0.23
// add use case for cpf3 and cnpj3 which should sum tax instead of reducing
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
var resultadoEsperado = 4750;
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
    return { tipo: "cpf1", valor: 5000 };
}
function outputTela(valor) {
    //ui logic
    resultadoObtido = valor;
    console.log("valor final:", valor);
}
function calculaRetorno() {
    var _a = inputTela(), tipo = _a.tipo, valor = _a.valor;
    var impostoaReceber;
    console.log("calculando valor");
    console.log("tipo: ", tipo);
    if (tipo === "cpf1") {
        impostoaReceber = valor * 0.05;
        console.log("taxa: 0.5");
    }
    if (tipo == "cpf2") {
        impostoaReceber = valor * 0.07;
        console.log("valor: 0.7");
    }
    if (tipo === "cnpj") {
        impostoaReceber = valor * 0.01;
        console.log("valor: 0.01");
    }
    outputTela(valor - impostoaReceber);
    return;
}
function main() {
    calculaRetorno();
}
