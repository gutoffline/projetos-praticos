let num1 = prompt("Informe o primeiro número")
let num2 = prompt("Informe o segundo número")
let operador = prompt("Informe um operador matemático: + - / * ")

if(operador == "+"){
    let resultado = parseFloat(num1) + parseFloat(num2)
    alert("O resultado da soma é " + resultado)
}else if(operador == "-"){
    let resultado = num1 - num2
    alert("O resultado da subtração é " + resultado)
}else if(operador == "*"){
    let resultado = num1 * num2
    alert("O resultado da multiplicação é " + resultado)
}else if(operador == "/"){
    let resultado = num1 / num2
    alert("O resultado da divisão é " + resultado)
}else{
    alert("Operação inexistente")
}

