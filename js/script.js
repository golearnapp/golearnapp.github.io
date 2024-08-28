/*--------------------------------------*/
/*            Toggle password           */
/*--------------------------------------*/

function togglePassword() {
  const senha = document.getElementById("senha");
  const showPassword = document.querySelector(".show-password");
  const hidePassword = document.querySelector(".hide-password");

  if (senha.type == "password") {
    senha.type = "text";
    showPassword.style.display = "none";
    hidePassword.style.display = "block";
  } else {
    senha.type = "password";
    showPassword.style.display = "block";
    hidePassword.style.display = "none";
  }
}

/*--------------------------------------*/
/*             Char counter             */
/*--------------------------------------*/

function counter() {
  var input = document.getElementById("textarea");
  var contador = document.getElementById("contador");
  var caracteresRestantes = 500 - input.value.length;
  contador.textContent = "Caracteres restantes: " + caracteresRestantes;
}

function showCounter() {
  var contador = document.getElementById("contador");
  contador.style.display = "block";
  counter();
}

function hideCounter() {
  var contador = document.getElementById("contador");
  contador.style.display = "none";
}

/*--------------------------------------*/
/*            Scroll to Top             */
/*--------------------------------------*/

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
