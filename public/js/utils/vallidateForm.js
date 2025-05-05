export function validateForm() {
    const allForms = document.querySelectorAll('form.needs-validation')
    let isValid = true
  
    allForms.forEach((form) => {
      if (!form.checkValidity()) {
        isValid = false
        form.classList.add('was-validated')
      }
    })
  
    return isValid;
}
