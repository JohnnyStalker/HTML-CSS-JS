playable = 6;
verifier = 0;
victory = false;
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impostor = Math.floor(Math.random() * 10) + 1;

//Função para embaralhar toda uma lista
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // Enquanto existirem elementos para bagunçar...
    while (currentIndex != 0) {
  
      // Pega um elemento restante...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // e troca com o elemento atual...
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//Função que executa a função Shuffle, e adiciona cada elemento dentro da div correta
function shufflelist() {
    shuffle(list)
    for (let i = 0; i < list.length; i++){
        document.getElementsByClassName("box")[i].innerHTML = list[i]
    }
    colors()
}

//Função que troca as cores dos elementos das divs por sua cor correta
function colors() {
    let item;
    for (let i = 0; i < 10; i++) {
        item = document.getElementsByClassName("box")[i]
        switch (list[i]){
            case 1:
                item.style.backgroundColor = "red"
                item.style.border = "black groove 2px"
                break;
            case 2:
                item.style.backgroundColor = "cyan"
                item.style.border = "black groove 2px"
                break;
            case 3:
                item.style.backgroundColor = "green"
                item.style.border = "black groove 2px"
                break;
            case 4:
                item.style.backgroundColor = "white"
                item.style.border = "black groove 2px"
                break;
            case 5:
                item.style.backgroundColor = "blue"
                item.style.border = "black groove 2px"
                break;
            case 6:
                item.style.backgroundColor = "yellow"
                item.style.border = "black groove 2px"
                break;
            case 7:
                item.style.backgroundColor = "pink"
                item.style.border = "black groove 2px"
                break;
            case 8:
                item.style.backgroundColor = "purple"
                item.style.border = "black groove 2px"
                break;
            case 9:
                item.style.backgroundColor = "gray"
                item.style.border = "black groove 2px"
                break;
            case 10:
                item.style.backgroundColor = "orange"
                item.style.border = "black groove 2px"
                break;
            case "X":
                item.style.backgroundColor = "black"
                item.style.border = "gray groove 2px"
        }

    }
}

shufflelist()


//Troca um elemento a esquerda ou a direita do index do "impostor" por um X.
function kill(){
    let killer = list.indexOf(impostor)
    let which = Math.floor(Math.random() * 2) + 1
    if (which == 1) {
        list[killer-1] = "X"
    }
    else {
        list[killer+1] = "X"
    }
    list[killer] = impostor
}

//Função Kick, basicamente troca um número digitado no por um X, retira 2 vidas e executa a função Kill.
function kick() {
    if (playable > 0) {
        number = parseInt(document.getElementById("impostor").value);
        verifier = list.indexOf(number)
        if (number == list[verifier]) {
            if (number == impostor) {
                document.getElementById("result").innerHTML = "Status: Parabéns,<br>você venceu<br>impostor: " + impostor
                victory = true
                playable = 0
                list[verifier] = "X"
                for (let i = 0; i < 10; i++){
                    document.getElementsByClassName("box")[i].innerHTML = list[i]
                }
            }
            else {
                document.getElementById("result").innerHTML = "Status: Você ainda não<br>encontrou o impostor"
                playable -= 2
                list[verifier] = "X"
                kill()
                verifier = 0
                shufflelist()
            }
        }
        else {
            if (victory == false) {
                document.getElementById("result").innerHTML = "Status: Este Tripulante<br>não está na nave"
            }
        }
    }
    else {
        if (victory == false) {
            document.getElementById("result").innerHTML = "Status: O impostor te<br>encontrou, você morreu<br>impostor: " + impostor
        }
        else {
            document.getElementById("result").innerHTML = "Status: Você encontrou o<br>impostor, parabéns!<br>impostor: " + impostor
        }
        
    }
}


//Apenas retira uma vida do jogador e não elimina ninguém, executa a função Kill
function skip() {
    if (playable > 0) {
        playable -= 1
        document.getElementById("result").innerHTML = "Status: Você pulou<br>a votação"
        kill()
        shufflelist()
    }
    else {
        if (victory == false) {
            document.getElementById("result").innerHTML = "Status: O impostor te<br>encontrou, você morreu"
        }
        else {
            document.getElementById("result").innerHTML = "Status: Você encontrou o<br>impostor, parabéns!"
        }
    }
}

//função shuffle criada a partir do site: "https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array"