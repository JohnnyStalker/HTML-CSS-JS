function clear_clear() {
    document.getElementById("result").innerHTML = "Aguardando Informações"
}

function do_it() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let age_group;
    if (age <= 19) {
        age_group = "jovens"
    }
    else if (age >= 20 && age <= 59) {
        age_group = "adultos"
    }
    else if (age >= 60) {
        age_group = "idosos / melhores de idade"
    }
    else {
        alert("A idade digitada não é um número")
        document.getElementById("result").innerHTML = "Aguardando Informações"
        return 0;
    }
    document.getElementById("result").innerHTML = "Você pertence ao grupo dos " + age_group;
}