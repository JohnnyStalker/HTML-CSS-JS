function zerostop() {
    let num1;
    let num2;
    let tester = 1;
    let count = 0;
    document.write("Esse programa só para depois de você digitar um<br>valor menor que zero em um dos dois espaços! <br><br>")
    alert("Esse programa só vai parar quando você digitar um número menor que zero em um dos dois espaços :D")
        do {
            while (isNaN(num1)) {
                num1 = parseInt(prompt("Digite um número para o espaço 1: "))
            }
            while (isNaN(num2)) {
                num2 = parseInt(prompt("Digite um número para o espaço 2: "))
            }
            (num1 < 0 || num2 < 0) ? tester = 0 : tester = 1;
            switch (tester) {
                case 0:
                    document.write("O programa foi executado " + count + " vezes")
                    return;
            }
            if (num1 > num2)  {
                alert("O número no espaço 1 (" + num1 + ") é maior que o número no espaço 2 (" + num2 + ").")
            }
            else if (num1 < num2)  {
                alert("O número no espaço 1 (" + num1 + ") é menor que o número no espaço 2 (" + num2 + ").")
            }
            else {
                alert("O número no espaço 1 (" + num1 + ") é igual ao número no espaço 2 (" + num2 + ").")
            }
            num1 = undefined;
            num2 = undefined;
        count += 1;
        } while (tester != 0);
}

zerostop()