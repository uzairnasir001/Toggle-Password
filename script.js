let passWord = document.querySelector("#password");
let eyeIcon = document.querySelector("#eyeicon");

eyeIcon.onclick = function () {
  if (passWord.type === "password") {
    passWord.type = "text";
    eyeIcon.src = "eye-open.png"
  } else {
    passWord.type = "password";
    eyeIcon.src = "eye-close.png";
  }
};
