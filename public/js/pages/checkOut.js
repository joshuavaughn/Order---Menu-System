const allForms = document.querySelectorAll("form.needs-validation");
const submitButton = document.querySelector('button[type="submit"]');

if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    let isValid = true;

    allForms.forEach((form) => {
      if (!form.checkValidity()) {
        isValid = false;
        form.classList.add("was-validated");
      }
    });

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
}
