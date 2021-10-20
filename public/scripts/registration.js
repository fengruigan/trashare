(() => {
  let passwordToggler = document.getElementById("password-toggler");
  let passwordInput = document.getElementById("password-input");
  passwordToggler.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
})();
