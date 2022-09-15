alert("Vamos calculcular o salário de um funcionária e ver como ele ficaria após um reajuste");
let salary = parseFloat(prompt("Digite o salário do funcionário"))
let percentage = parseFloat(prompt("Digite a porcentagem do reajuste:"))
let new_salary = ((percentage*salary)/100)
alert("O salário do funcionário após o reajuste será de " + new_salary + "R$ com um reajuste de " + percentage + "%")

document.write("O salário do funcionário é de: ", salary, "R$</br>")
document.write("Ele recebeu um reajuste para ", percentage, "% do salário anterior </br></br>")
document.write("E o salário atual dele é igual á: ", new_salary, "R$")