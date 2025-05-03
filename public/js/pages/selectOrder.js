import { fetchJson } from "../utils/fetchJson.js";
import { filterThis } from "../utils/filter.js";
import { createMenuItemCard } from "../utils/createMenuCard.js";
import { setOrderTracker } from "../utils/setOrderTracker.js";
import { displayOrderItems } from '../utils/displayOrderItems.js'
import { checkSection } from '../utils/checkSection.js'

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");
  const bundle = params.get("bundle");

  const menuContainer = document.querySelector("#menu-items");

  let orderItems = [];

  try {
    const menu = await fetchJson();

    //populate menu items
    const filteredData = filterThis(menu, category, section, "", bundle);

    filteredData.forEach((menuItem) => {
      const menuCard = createMenuItemCard(menuItem);
      menuContainer.appendChild(menuCard);
    });
    //add an order tracker
    const chosenBundle = setOrderTracker(bundle);

    //check for any chosen order
    const foodItem = document.querySelectorAll(".food-item");
    foodItem.forEach((item) => {
      item.addEventListener("click", () => {

        const value = item.id;
        const index = value.slice(5);
        const section = checkSection(menu, index);

        //make an array of all the selected food
        let newItem = [index, 1, section];

        let itemFound = false;
        orderItems.forEach((item) => {
          if (item[0] === newItem[0]) {
            item[1] += newItem[1];
            itemFound = true;
          }
        });

        if (!itemFound) {
          orderItems.push(newItem);
        }
        
        displayOrderItems(menu, index, orderItems, bundle);
      });
    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
