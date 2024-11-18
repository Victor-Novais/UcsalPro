const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente carregado e analisado!");

  const form = document.querySelector(".form-contato");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let hasError = false;

      const nome = document.getElementById("nome");
      const email = document.getElementById("email");
      const mensagem = document.getElementById("mensagem");

      clearErrors();

      if (nome.value.trim() === "") {
        showError(nome, "O campo Nome é obrigatório.");
        hasError = true;
      }

      if (email.value.trim() === "") {
        showError(email, "O campo E-mail é obrigatório.");
        hasError = true;
      } else if (!isValidEmail(email.value)) {
        showError(email, "Digite um e-mail válido.");
        hasError = true;
      }

      if (mensagem.value.trim() === "") {
        showError(mensagem, "O campo Mensagem é obrigatório.");
        hasError = true;
      }

      if (!hasError) {
        successMessage.style.display = "block";
        successMessage.textContent = "Formulário enviado com sucesso!";

        form.reset();

        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      }
    });
  } else {
    console.error("Formulário não encontrado!");
  }

  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan) {
      errorSpan.textContent = message;
      errorSpan.style.display = "block";
    }
  }

  function clearErrors() {
    const errorSpans = document.querySelectorAll(".error-message");
    errorSpans.forEach((span) => {
      span.textContent = "";
      span.style.display = "none";
    });
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
