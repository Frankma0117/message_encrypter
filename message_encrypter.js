/*Selectors encrypt section*/
const message = document.querySelector(".message-encrypter");
const encryptButton = document.querySelector(".encrypt-button");
const decryptButton = document.querySelector(".decrypt-button");
const copyButton = document.querySelector(".copy-button");

/*Selectors decrypt section*/
const resultSectionImagen = document.querySelector(".decrypt-section");
const resultSectionText = document.querySelector(".result-section");
const resultText = document.querySelector(".result-text");
const deleteText = document.querySelector(".delete-icon");

/*Selectors modal section*/
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");
const modalImagen = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalMessage = document.querySelector(".modal-message");

/*Selectors footer */
const yearCopyright = document.querySelector(".copyright_text");

let today = new Date();
let year = today.getFullYear();

yearCopyright.textContent = `© Copyright ${year} -  Desarrollado por Manuel Cañón -  Oracle Next Education `;

function encrypt() {
  let text = message.value;

  if (message.value == "") {
    modalImagen.src = "https://i.ibb.co/Pz5QKmC/alert-icon.png";
    modalTitle.textContent = "Error al encriptar";
    modalMessage.textContent =
      "Recuerda que los mensajes a encriptar no pueden estar vacíos ¡Dale en aceptar e ingresa nuevamente el mensaje!";
    modal.classList.add("modal-show");
  } else if (!/[A-ZáéíóúÁÉÍÓÚ]/.test(text)) {
    let result = text
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    resultSectionImagen.style.display = "none";
    resultText.textContent = result;
    resultSectionText.style.display = "flex";
  } else {
    modalImagen.src = "https://i.ibb.co/Pz5QKmC/alert-icon.png";
    modalTitle.textContent = "Error al encriptar";
    modalMessage.textContent =
      "Recuerda que los mensajes a encriptar no deben contener caracteres en mayúscula ni con acentos !Dale en aceptar e ingresa nuevamente el mensaje!";
    modal.classList.add("modal-show");
  }
}

function decrypt() {
  let text = message.value;
  if (message.value == "") {
    modalImagen.src = "https://i.ibb.co/Pz5QKmC/alert-icon.png";
    modalTitle.textContent = "Error al encriptar";
    modalMessage.textContent =
      "Recuerda que los mensajes a desencriptar no pueden estar vacíos ¡Dale en aceptar e ingresa nuevamente el mensaje!";
    modal.classList.add("modal-show");
  } else if (!/[A-ZáéíóúÁÉÍÓÚ]/.test(text)) {
    let result = text
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    resultSectionImagen.style.display = "none";
    resultText.textContent = result;
    resultSectionText.style.display = "flex";
  } else {
    modalImagen.src = "https://i.ibb.co/Pz5QKmC/alert-icon.png";
    modalTitle.textContent = "Error al encriptar";
    modalMessage.textContent =
      "Recuerda que los mensajes a desencriptar no deben contener caracteres en mayúscula ni con acentos !Dale en aceptar e ingresa nuevamente el mensaje!";
    modal.classList.add("modal-show");
  }
}

function copy() {
  var falseInput = document.createElement("input");
  falseInput.setAttribute("value", resultText.textContent);
  message.value = resultText.textContent;
  document.body.appendChild(falseInput);
  falseInput.select();
  falseInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(falseInput.value);
  document.body.removeChild(falseInput);
}

function copyOption() {
  copy();
  modalImagen.src = "https://i.ibb.co/xssjDWh/copy-icon.png";
  modalTitle.textContent = "Mensaje copiado";
  modalMessage.textContent =
    "El mensaje fue copiado exitosamente ! Dale en aceptar y verifica en tu portapapeles y en el campo de ingreso del encriptador !";
  modal.classList.add("modal-show");
}

function close() {
  modal.classList.remove("modal-show");
}
function cleanText(){
  message.value = "";
}

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copyOption;
closeModal.onclick = close;
deleteText.onclick = cleanText;
