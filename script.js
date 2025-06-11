const display = document.getElementById("status");
const generatorBox = document.getElementById("_generator");
const clientInput = document.getElementById("_client-text");
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_refresh");

const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha = "";

function generateCaptcha() {
  captcha = "";
  const captchaLength = 5;
  for (let i = 0; i < captchaLength; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    captcha += char[randomIndex];
  }
  generatorBox.value = captcha;
  display.innerText = "Captcha Generator";
  clientInput.value = "";
}

window.onload = generateCaptcha;
refresh.onclick = generateCaptcha;

submit.onclick = function checkInput() {
  const userInput = clientInput.value.trim();
  if (userInput === "") {
    display.innerText = "Please enter the captcha!";
    display.style.color = "orange";
  } else if (userInput === captcha) {
    display.innerText = "Captcha Matched ✔️";
    display.style.color = "green";
  } else {
    display.innerText = "Captcha Not Matched ❌";
    display.style.color = "red";
  }
};
