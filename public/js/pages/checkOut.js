import { validateForm } from "../utils/vallidateForm.js";
import { fetchID } from "../api/fetchID.js";
import { writeOrderItems } from "../api/writeOrderItems.js"
import { rowNum } from "../api/rowNum.js"
import { writeCustomer } from "../api/writeCustomer.js"

const submitButton = document.querySelector(".needs-validation");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const houseNum = document.querySelector("#houseNum");
const city = document.querySelector("#city");
const barangay = document.querySelector("#barangay");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const phoneNum = document.querySelector("#phoneNum");
const fbAcc = document.querySelector("#fbAcc");

const orderArray = JSON.parse(sessionStorage.getItem("toStore"));

const barangaysByCity = {
  //populate barangays in each city
  Pasay: ["Barangay 1", "Barangay 2", "Barangay 3"],
  Makati: ["Barangay A", "Barangay B", "Barangay C"],
};

submitButton.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(`submitted`);

  const isFormValid = validateForm();

  console.log(`orderArray`);
  console.log(orderArray);

  // if (!isFormValid) {
  //   event.stopPropagation();
  //   return;
  // }

  const OrderID = await fetchID("Order");
  const customerID = await fetchID("Customer");
  const rowOrderITems = await rowNum("OrderItems");
  const rowCustomer = await rowNum("Customer");

  console.log(OrderID);

  //write order items
  for (let i = 0; i < 2; i++) {
      orderArray[i].forEach(item => {
        writeOrderItems(OrderID, item[0], item[1], rowOrderITems);
          console.log(item);
      });
  }

//write customer
writeCustomer(customerID, fname, lname, phoneNum, houseNum, city, barangay, fbAcc, rowCustomer);


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
