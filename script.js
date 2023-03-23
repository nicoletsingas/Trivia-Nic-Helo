const correctAnswer = ['Chihuahua', 'Border Collie', 'Cocker Spaniel', 'Siamês', 'American Shorthair', 'Sphynx'];
let numberOfCorrectQuestions = 0;
let score = 0;

function checkTheCorrectAnswer(answer) {
  let selectedValue = document.querySelector('input[type="radio"]:checked');
  let breed = document.querySelector('input[type="radio"]:checked').value;

  if ((correctAnswer.includes(breed)) && (selectedValue != null)) {
    alert(`Você acertou! A resposta certa é: ${answer}.\nSua resposta foi: ${selectedValue.value}`);
    numberOfCorrectQuestions += 1;
    score += 10;
  } else {
    alert(`Você Errou! A resposta certa é: ${answer}.\nSua resposta foi: ${selectedValue.value}`);
    score -= 10;
  }
}

function printScoreResult() {
  document.getElementById("correctQuestion").innerHTML = numberOfCorrectQuestions;
  document.getElementById("scoreTotal").innerHTML = score;
}

function welcome() {
  ocult("welcome-input");
  visible("chooseTheme");
  let name = document.getElementById("inputName").value;
  document.getElementById("name").innerHTML = name;

}

function resetRadioButtons() {
  let elemento = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < elemento.length; i++) {
    elemento[i].checked = false;
  }
}

function visible(id) {
  document.getElementById(id).style.display = "block";
}

function ocult(currentQuestion) {
  document.getElementById(currentQuestion).style.display = "none";
}

function changeVisibleState(nextQuestion, currentQuestion) {
  resetRadioButtons();
  ocult(currentQuestion);
  let display = document.getElementById(nextQuestion).style.display;

  if (display == 'block') {
    ocult(nextQuestion);
  } else {
    visible(nextQuestion);
  }
}

function changeColor(id) {
  if (score >= 10) {
    document.getElementById(id).style.color = "green";
    visible("smiley");
    ocult("chocked");
  } else {
    document.getElementById(id).style.color = "red";
    visible("chocked");
    ocult("smiley");
  }
}

function validateName() {
  let name = document.getElementById("inputName").value;
  let regex = /[a-zA-Z\u00C0-\u00FF ]+/i; //regular expression - aceita somente caracteres
  const validado = regex.test(name);
  if(validado){
    welcome();
  }else {
    alert(`Insira um nome válido!`);
    clearInput();
  }
}

function clearInput() {
  document.getElementById("inputName").value = ""; //função que limpa o input
};