let x = true;
alert("Vamos fazer a tabuada de multiplicação")
function doit() {
    let num;
    let result;
    let alertspace = ""
    while (isNaN(num)) {
        num = parseInt(prompt("Digite um valor: "))
    }
    for (let i = 0; i < 10; i++) {
        result = num * (i+1)
        document.write(num + " X " + (i+1) + " = " + result)
        alertspace += num + " X " + (i+1) + " = " + result + "\n"
        document.write("<br>")
    }
    alert(alertspace)
    document.write("<br>")
}

while (x == true) {
    doit()
    x = confirm("Deseja executar o programa de novo e criar outra tabuada?")
    document.write("<hr> <br>")
    x == false ? alert("Programa encerrado!") :
    document.write()
}