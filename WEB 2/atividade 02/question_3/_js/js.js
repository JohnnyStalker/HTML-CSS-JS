function clear_clear() {
    document.getElementById("result").innerHTML = "Seu Resultado"
}

function do_it() {
    let operator = document.getElementById("operator").value;
    let value1 = parseInt(document.getElementById("value1").value);
    let value2 = parseInt(document.getElementById("value2").value);
    let result;
    switch (operator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
    }
    isNaN(result) ? (
        document.getElementById("result").innerHTML = "Seu Resultado", 
        alert("Operação inválida, verifique os valores ou o operador inserido")) 
        : 
        document.getElementById("result").innerHTML = "Seu Resultado é " + result 
    
    
}
