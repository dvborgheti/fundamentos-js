// Declaração de função

function  minhaFuncao(param){
    // Bloco de codigo
}

minhaFuncao("param")

// expressao de funcao 

const soma = function(num1, num2){return num1 + num2}
console.log(soma(1,1));

// Diferença Principal: HOISTING 
// funções e var são "listadas" no TOPO

console.log(apresentar());
function apresentar(){
    return "Olá"
}

console.log(menos(1,1))
const menos = function(num1, num2){return num1 - num2}
