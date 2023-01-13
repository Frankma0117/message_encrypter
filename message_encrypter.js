let message = document.querySelector(".message-encrypter");
let encryptButton = document.querySelector(".encrypt-button");
let decryptButton = document.querySelector(".decrypt-button");
let copyButton = document.querySelector(".copy-button");

let resultSectionImagen = document.querySelector(".decrypt-section");
let resultSectionText = document.querySelector(".result-section");
let resultText = document.querySelector(".result-text");

resultSectionText.style.display = "none";

function encrypt() {
  let text = message.value;
  let result = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  resultSectionImagen.style.display = "none";
  resultText.textContent = result;
  resultSectionText.style.display = "block";
}

function decrypt() {
  let text = message.value;
  let result = text
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  resultSectionImagen.style.display = "none";
  resultText.textContent = result;
  resultSectionText.style.display = "block";
}

function copy() {
  var falseInput = document.createElement("input");
  falseInput.setAttribute("value", resultText.textContent);
  document.body.appendChild(falseInput);
  falseInput.select();
  document.execCommand("copy");
  document.body.removeChild(falseInput);
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copy;
