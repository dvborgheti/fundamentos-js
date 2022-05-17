// Parametros da função

function soma(num1, num2){
    return num1 + num2
}

console.log(soma(5,5))

// Parametros x Argumentos 

// Ordem dos parametros 

function nomeIdade(nome,idade){
    return `Meu nome é ${nome} e minha idade é ${idade} anos `
}

console.log(nomeIdade("Diego",26))


function multiplica(n1 = 1,n2 = 1){
    return n1 * n2
}
console.log(multiplica(soma(2,3), soma(4,5)))