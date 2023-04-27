const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const btnSubmit = document.getElementsByClassName("btn-submit");

function checkName() {
  let tempName = document.getElementById("get-name").value;

  if (tempName.length == 0) {
    nameError.innerHTML = "This field is required";
  } else {
    nameError.innerHTML = "";
  }
}

function checkEmail() {
  let tempEmail = document.getElementById("get-email").value;

  if (!tempEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.innerHTML = "Invalid email address";
  } else {
    emailError.innerHTML = "";
  }
}

function checkMessage() {
  let tempMessage = document.getElementById("get-message").value;
  if (tempMessage.length == 0) {
    messageError.innerHTML = "This field is required";
  } else {
    messageError.innerHTML = "";
  }
}

function clearInput() {
  document.getElementById("get-name").value = "";
  document.getElementById("get-email").value = "";
  document.getElementById("get-message").value = "";
}

function pressButton() {
  btnSubmit[0].addEventListener("click", function () {
    checkName();
    checkEmail();
    checkMessage();
    clearInput();
  });
}

pressButton();
