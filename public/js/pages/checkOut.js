import { validateForm } from "../utils/vallidateForm.js";

const submitButton = document.querySelector(".needs-validation");
const city = document.querySelector("#city");

const orderArray = JSON.parse(sessionStorage.getItem("toStore"));

const barangaysByCity = {
  //populate barangays in each city
  Pasay: ["Barangay 1", "Barangay 2", "Barangay 3"],
  Makati: ["Barangay A", "Barangay B", "Barangay C"],
};

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(`submitted`);

  const isFormValid = validateForm();

  console.log(`orderArray`);
  console.log(orderArray);

  if (!isFormValid) {
    event.stopPropagation();
    return;
  }

//write order items
for (let i = 0; i < 2; i++) {
    orderArray[i].forEach(item => {
        // writeOrderItems(item[0], item[1]);
        //need orderID
        console.log(item);
    });
}

//write customer


// write order

});



city.addEventListener("change", function () {
  const selectedCity = this.value;

  barangay.innerHTML = '<option value="">-- Select Barangay --</option>';

  if (barangaysByCity[selectedCity]) {
    barangaysByCity[selectedCity].forEach((option) => {
      const brgyOption = document.createElement("option");
      brgyOption.value = option;
      brgyOption.textContent = option;
      barangay.appendChild(brgyOption);
    });
  }
});
