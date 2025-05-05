import { fetchJson } from "../utils/fetchJson.js";
import { filterThis } from "../utils/filter.js";
import { createMenuItemCard } from "../utils/createMenuCard.js";
import { setOrderTracker } from "../utils/setOrderTracker.js";
import { displayOrderItems } from "../utils/displayOrderItems.js";
import { checkSection } from "../utils/checkSection.js";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");
  const bundle = params.get("bundle");

  const menuContainer = document.querySelector("#menu-items");

  let orderItems = [];
  let toStore = []; //light, heavy, note
  toStore[0] = [];
  toStore[1] = [];
  toStore[2] = "";

  let filteredData = [];


  const dis = JSON.parse(sessionStorage.getItem("toStore"));

  console.log(`dis`);
  console.log(dis);

  try {
    const menu = await fetchJson();

    //populate menu items
    if (category == "Everything" && section == "" && bundle == "2L1H") {
      filteredData = menu;
    } else {
      filteredData = filterThis(menu, category, section, "", bundle);
    }
    
    // const filteredData = filterThis(menu, category, section, "", bundle);

    console.log (filteredData);

    filteredData.forEach((menuItem) => {
      const menuCard = createMenuItemCard(menuItem);
      menuContainer.appendChild(menuCard);
    });
    //add an order tracker
    const chosenBundle = setOrderTracker(bundle);

    if (dis != null) {
      toStore = dis;
      displayOrderItems(menu, toStore[0], toStore[1], bundle);
    }

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
            newItem[1] = item[1];
          }
        });

        if (!itemFound) {
          orderItems.push(newItem);
        }

        // Populate toStore[0] (light) or toStore[1] (heavy)
        const targetArray = newItem[2] === "light" ? toStore[0] : toStore[1];

        let found = false;
        for (let i = 0; i < targetArray.length; i++) {
          if (targetArray[i][0] === newItem[0]) {
            targetArray[i][1] = newItem[1]; // update quantity
            found = true;
            break;
          }
        }

        if (!found) {
          targetArray.push([newItem[0], newItem[1]]);
        }

        displayOrderItems(menu, toStore[0], toStore[1], bundle);

        sessionStorage.setItem("toStore", JSON.stringify(toStore));


      });


    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
