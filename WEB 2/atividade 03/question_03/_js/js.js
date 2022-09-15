function count() {
    alert("Vamos mostrar todos os números pares entre 200 e 300!")
    let choice = 3;
    let i = 200;
    while (isNaN(choice) || choice > 2 || choice <= 0) {
        choice = parseInt(prompt("Você deseja executar o comando com 'For' ou com 'While'? Digite 1 para 'For' e 2 para 'While'"))
    }
    switch (choice) {
        case 1:
            document.write("Executando com For <br><br>")
            for (let l = 200; i < 301; i++) {
                i % 2 == 0 ? document.write(i + "<br>") :
                document.write()
            }
            break;
        case 2:
            document.write("Executando com While <br><br>")
            while (i < 301) {
                i % 2 == 0 ? document.write(i + "<br>") :
                document.write()
                i+=1
            }
    }
}

count()