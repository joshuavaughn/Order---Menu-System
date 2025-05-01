import { createMenuItemCard } from "../utils/createMenuCard.js";
import { filterThis } from "../utils/filter.js";
import { fetchJson } from "../utils/fetchJson.js";
import { checkSection } from "../utils/checkSection.js";

document.addEventListener("DOMContentLoaded", async () => {
  const menuContainer = document.querySelector("#menu-items");

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");

  try {
    const menu = await fetchJson();

    const filteredData = filterThis(menu, category, section);

    filteredData.forEach((menuItem, index) => {
      const menuCard = createMenuItemCard(menuItem, index);
      menuContainer.appendChild(menuCard);
    });

    const foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach((foodItem) => {
      foodItem.addEventListener("click", (e) => {
        const value = foodItem.id;
        const index = value[5];
        
        const section = checkSection(menu, index); 

        window.location.href = `foodItem.html?food=${menu[index].name}&section=${section}`;
      });
    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
