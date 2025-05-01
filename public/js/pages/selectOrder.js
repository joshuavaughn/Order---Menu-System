import { createMenuItemCard } from "../utils/createMenuCard.js";
import { filterThis } from "../utils/filter.js";
import { fetchJson } from "../utils/fetchJson.js";
import { checkSection } from "../utils/checkSection.js";
import { setOrderTracker } from "../utils/setOrderTracker.js"

document.addEventListener("DOMContentLoaded", async () => {
  const menuContainer = document.querySelector("#menu-items");

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");
  const bundle = params.get("bundle");

  try {
    console.log(bundle);
    const chosenBundle = setOrderTracker(bundle);

    console.log(`chosenBundle = ${chosenBundle}`);

    const menu = await fetchJson();

    const filteredData = filterThis(menu, category, chosenBundle);

    filteredData.forEach((menuItem, index) => {
      const menuCard = createMenuItemCard(menuItem, index);
      menuContainer.appendChild(menuCard);
    });

    const lightOrder = document.querySelector("#Light-Order");
    const heavyOrder = document.querySelector("#Heavy-Order");

    const foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach((foodItem) => {
      foodItem.addEventListener("click", (e) => {
        const value = foodItem.id;
        const index = value[5];
        
        const selectedFood = document.createElement("li");
        selectedFood.id = `${foodItem.id}`;
        selectedFood.classList.add("list-group-item");
        selectedFood.innerHTML = `
        ${menu[index].name}
        `;

        const section = checkSection(menu, index); 
        if (section == "light") {
            lightOrder.appendChild(selectedFood);
        } else if (section =="heavy") {
            heavyOrder.appendChild(selectedFood);
        } else {
            console.log (`cant append`);
        }

      });
    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
