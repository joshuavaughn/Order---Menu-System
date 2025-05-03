import { setOrderTracker } from "../utils/setOrderTracker.js"
import { checkSection } from "../utils/checkSection.js";

export function createOrderItems(menu, orderItems, index, bundle) {

    console.log (`orderItems`);
    console.log (orderItems);

    const lightOrder = document.querySelector("#Light-Order");
    const heavyOrder = document.querySelector("#Heavy-Order");

    console.log(lightOrder);
    console.log(heavyOrder);

    const chosenBundle = setOrderTracker(bundle);

    console.log(chosenBundle);

    orderItems.forEach(item => {
        console.log(`item = ${item}`);

        const selectedFood = document.createElement("li");
        selectedFood.id = `food-${item[0]}`;
        selectedFood.classList.add("list-group-item");
        selectedFood.classList.add("d-flex");
        selectedFood.classList.add("align-items-center");
        selectedFood.innerHTML = `
        <p>${menu[item[0]].name}</p>
        <p class="ms-auto me-1">${item[1]}</p>
        <div class="d-flex flex-column">
          <button type="button" class="btn btn-light py-1 px-2">^</button>
          <button type="button" class="btn btn-light py-1 px-2">v</button>
        </div>
        `;

        console.log(`selectedFood`);
        console.log(selectedFood);

        const section = checkSection(menu, index);

        console.log(`section`);
        console.log(section);

        if (section == "light") {
            lightOrder.appendChild(selectedFood);
            console.log(`done append light`);
        } else if (section == "heavy") {
            heavyOrder.appendChild(selectedFood);
            console.log(`done append heavy`);
        } else {
            console.log(`cant append`);
        }
    });
}