alert("Este programa recebe 3 notas e soma a média!")
alert("Nesta escola, com uma nota menor que 4 você é reprovado!")
let nome = prompt("Digite seu nome")
let vet = [0, 0, 0]

function somaNotas (name, vetor) {
    let final = 0;
    for (let i = 0; i < vetor.length; i++) {
    	final = final + vetor[i]
    }
    final = final / vetor.length
    if (final >= 7) {
    	alert("O Aluno(a) " + nome + " foi aprovada com uma média de " + Math.trunc(final) + "!")
    }
    if (final < 4) {
    	alert("O Aluno(a) " + nome + " foi reprovado com uma média de " + Math.trunc(final) + "!")
    }
    if (final >=4 && final <= 6) {
        alert("O Aluno(a) " + nome + " está de recuperação com uma média de " + Math.trunc(final) + "!")
    }
}


for (let i = 0; i < 3; i++) {
	vet[i] = parseInt(prompt("Digite a " + parseInt(i+1) + "º nota "))
	if (vet[i] < 0 || vet[i] > 10) {
		alert("Notas inválidas serão consideradas como 0")
		vet[i] = 0
	}
}
	console.log(vet)

somaNotas (nome, vet)
