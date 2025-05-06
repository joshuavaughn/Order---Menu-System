export function validateForm() {
    const form = document.querySelector('form.needs-validation')
    const phoneNum = form.querySelector('#phoneNum');
    const date = form.querySelector("#date");

    let isValid = true
    
    //check if everything is filled out
    if (!form.checkValidity()) {
      isValid = false;
      form.classList.add('was-validated');
    }
  
    //check if date is valid
    const selectedDate = new Date(date.value);
    const currentDate = new Date();

    if (selectedDate.getDate() < currentDate.getDate()+2) {
      isValid = false;
      date.classList.add('is-invalid');
    } else {
      date.classList.remove('is-invalid');
      date.classList.add('is-valid');
    }

    //check if phone is valid
    const phoneValue = phoneNum.value.trim();
    const phoneRegex = /^9\d{9}$/; 

    if (!phoneRegex.test(phoneValue)) {
      isValid = false;
      phoneNum.classList.add('is-invalid');
    } else {
      phoneNum.classList.remove('is-invalid');
      phoneNum.classList.add('is-valid');
    }

    return isValid;
}
