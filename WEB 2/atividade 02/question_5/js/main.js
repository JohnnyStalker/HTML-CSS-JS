const alturaElm = document.querySelector('input[name=altura]');
const pesoElm = document.querySelector('input[name=peso]');
const imcElm = document.querySelector('#imc');

function calculadoraDeIMC() {
  let altura = alturaElm.value;
  let peso = pesoElm.value;
  let sexo = document.querySelector('input[name=sexo]:checked').value;
  
  // Escreva código aqui 
  let imc = peso / (altura * altura); // calcule o IMC com as váriáveis acima 
  
  /*A variável resultado irá receber uma 
  string referente ao status do usuário, 
  com base nas regras do IMC*/  
  let resultado = ""; 

  switch (sexo) {
    case "masculino":
      if (imc < 20.7) {
        resultado = "Abaixo do Peso"
      }
      else if (imc >= 20.7 && imc < 26.4) {
        resultado = "Peso Normal"
      }
      else if (imc >= 26.4 && imc < 27.8) {
        resultado = "Marginalmente Acima do Peso"
      }
      else if (imc >= 27.8 && imc < 31.1) {
        resultado = "Acima do Peso Ideal"
      }
      else if (imc >= 31.1) {
        resultado = "Obeso"
      }
      else {
        resultado = "Peso ou Altura Inválida"
      }
      break;

    case "feminino":
      if (imc < 19.1) {
        resultado = "Abaixo do Peso"
      }
      else if (imc >= 19.1 && imc < 25.8) {
        resultado = "Peso Normal"
      }
      else if (imc >= 25.8 && imc < 27.3) {
        resultado = "Marginalmente Acima do Peso"
      }
      else if (imc >= 27.3 && imc < 32.3) {
        resultado = "Acima do Peso Ideal"
      }
      else if (imc >= 32.3) {
        resultado = "Obeso"
      }
      else {
        resultado = "Peso ou Altura Inválida"
      }
      break;
  }
  
  //Resultado da função com o status do usuário
  imcElm.value = resultado
}