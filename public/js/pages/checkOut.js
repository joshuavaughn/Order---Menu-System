import { validateForm } from "../utils/vallidateForm.js";
import { fetchID } from "../api/fetchID.js";
import { writeOrderItems } from "../api/writeOrderItems.js"
import { rowNum } from "../api/rowNum.js"
import { writeCustomer } from "../api/writeCustomer.js"
import { writeOrder } from "../api/writeOrder.js"

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
const currentDate = new Date();

const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(currentDate.getDate()).padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${year}-${month}-${day}`;

const orderArray = JSON.parse(sessionStorage.getItem("orderArray"));

const barangaysByCity = {
  //populate barangays in each city
  Pasay: ["Barangay 1", "Barangay 2", "Barangay 3"],
  Makati: ["Barangay A", "Barangay B", "Barangay C"],
};

submitButton.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log(orderArray);

  const isFormValid = validateForm();

  // if (!isFormValid) {
  //   event.stopPropagation();
  //   return;
  // }

  const OrderID = await fetchID("Order");
  const customerID = await fetchID("Customer");
  const rowCustomer = await rowNum("Customer");
  const rowOrder = await rowNum("Order");


  //write order items
  for (let i = 0; i < 2; i++) {
      for (let j = 0; j < orderArray[i].length; j++) {
        const rowOrderITems = await rowNum("OrderItems");
        writeOrderItems(OrderID, orderArray[i][j][0], orderArray[i][j][1], rowOrderITems);
      }
  }

//write customer
writeCustomer(customerID, fname.value, lname.value, phoneNum.value, houseNum.value, city.value, barangay.value, fbAcc.value, rowCustomer);

console.log(orderArray);

// write order
writeOrder(OrderID, formattedDate, time.value, date.value, orderArray[2], "pending", customerID, "not paid", "NA", "NA", rowOrder);
// console.log (OrderID, formattedDate, time.value, date.value, orderArray[2], "pending", customerID, "not paid", "NA", "NA", rowOrder);

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
