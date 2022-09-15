alert("Vamos calcular a sua idade apenas em dias");
let actual_year = parseInt(2021)
let year = parseInt(prompt("Digite o seu ano de nascimento: "));
let mouth = parseInt(prompt("Digite o seu mês de nascimento: "));
let day = parseInt(prompt("Digite o seu dia de nascimento: "));

let age_in_days = ((actual_year - year) * 365) + (mouth * 30) + day

alert("A sua idade em dias é de: " + age_in_days)

document.write("Ano: ", year, "</br>")
document.write("Mês: ", mouth, "</br>")
document.write("Dia: ", day, "</br></br>")
document.write("Idade em dias: ", age_in_days)