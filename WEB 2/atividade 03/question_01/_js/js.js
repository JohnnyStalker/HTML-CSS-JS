function oddeven() {
    alert("Vamos ver se o número digitado é par ou impar!")
    let howmuch;
    while (isNaN(howmuch)) {
        howmuch = parseInt(prompt("Quantas vezes deseja executar o programa: "))
        isNaN(howmuch) ? 
            alert("O valor digitado não é um número"):
            alert("O programa será executado " + howmuch + " vezes")
    }
    document.write("O programa foi executado " + howmuch + " vezes <br><br>")
    for (let i = 0; i < howmuch; i++) {
        let num;
        while (isNaN(num)) {
            num = parseInt(prompt("Digite um número inteiro: "))
        }
        num % 2 == 0 ?
            num = ("O número " + num + " é par") :
            num =("O número " + num + " é impar");
        alert(num)
        document.write(num + "<br>")
    }
}

oddeven();