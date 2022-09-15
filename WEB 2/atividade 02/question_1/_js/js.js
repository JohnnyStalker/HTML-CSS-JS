function clear_clear() {
    document.getElementById("result").innerHTML = "Seu Resultado"
}

function sum_tax() {
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    if (salary <= 24000) {
        document.getElementById("result").innerHTML = name + ", você está isento"
    }
    else if (salary > 24000 && salary <= 32000) {
        document.getElementById("result").innerHTML = name + ", você pagará 8,5% de imposto"
    }
    else if (salary > 32000 && salary <= 50000) {
        document.getElementById("result").innerHTML = name + ", você pagará 15% de imposto"
    }
    else if (salary > 50000){
        document.getElementById("result").innerHTML = name + ", você pagará 23,5% de imposto"
    }
    else {
        alert("O valor digitado não é um número")
        document.getElementById("result").innerHTML = "Seu Resultado"
    }
}