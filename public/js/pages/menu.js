import { createMenuItemCard } from "../utils/createMenuCard.js";
import { filterThis } from "../utils/filter.js";
import { fetchJson } from "../utils/fetchJson.js";
import { checkSection } from "../utils/checkSection.js";

document.addEventListener("DOMContentLoaded", async () => {
  const menuContainer = document.querySelector("#menu-items");

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");

  let filteredData = [];

  try {
    const menu = await fetchJson();

    if (category != "Everything") {
      filteredData = filterThis(menu, category, section, "", bundle);
    } else {
      filteredData = menu;
    }

    console.log(filteredData);

    // const filteredData = filterThis(menu, category, section);   //sets what is the selected filter (category & section)

    filteredData.forEach((menuItem) => {
      const menuCard = createMenuItemCard(menuItem);
      menuContainer.appendChild(menuCard);
    });

    const foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach((foodItem) => {
      foodItem.addEventListener("click", (e) => {
        const value = foodItem.id;
        const index = value.slice(5);
        
        const section = checkSection(menu, index); 

        window.location.href = `foodItem.html?food=${menu[index].name}&section=${section}`;
      });
    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
