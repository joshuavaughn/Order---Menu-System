import { validateForm } from "../utils/vallidateForm.js"

const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener("click", (event) =>{
    const isFormValid = validateForm()

    if (!isFormValid) {
      event.preventDefault()
      event.stopPropagation()
    }
  
})