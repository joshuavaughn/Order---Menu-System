import { fetchJson } from "../utils/fetchJson.js";
import { filterThis } from "../utils/filter.js";
import { createMenuItemCard } from "../utils/createMenuCard.js";
import { setOrderTracker } from "../utils/setOrderTracker.js";
import { displayOrderItems } from "../utils/displayOrderItems.js";
import { populateOrderArray } from "../utils/populateOrderArray.js"
import { addQuantity } from "../utils/addQuantity.js"

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const section = params.get("section");
  const bundle = params.get("bundle");

  const menuContainer = document.querySelector("#menu-items");

  let orderArray = [[], []]; // [0] = light, [1] = heavy

  let filteredData = [];

  const loadedOrders = JSON.parse(sessionStorage.getItem("orderArray"));

  try {
    const menu = await fetchJson();

    //populate menu items
    if (category == "Everything" && section == "" && bundle == "2L1H") {
      filteredData = menu;
    } else {
      filteredData = filterThis(menu, category, section, "", bundle);
    }
    
    // const filteredData = filterThis(menu, category, section, "", bundle);

    filteredData.forEach((menuItem) => {
      const menuCard = createMenuItemCard(menuItem);
      menuContainer.appendChild(menuCard);
    });
    
    //add an order tracker
    const chosenBundle = setOrderTracker(bundle);

    if (loadedOrders != null) {
      console.log (`loadedOrders is not null`);
      orderArray = loadedOrders;
      displayOrderItems(menu, orderArray[0], orderArray[1], bundle);
    }

    //check for any chosen order
    const foodItem = document.querySelectorAll(".food-item");
    foodItem.forEach((item) => {
      item.addEventListener("click", () => {
        
        let newArray = populateOrderArray (menu, item, orderArray);

        orderArray = newArray;
      
        console.log(orderArray);
        
        // Display and store
        displayOrderItems(menu, orderArray[0], orderArray[1], bundle);
        sessionStorage.setItem("orderArray", JSON.stringify(orderArray));

      });
    });

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("quantity")) {
        let newArray = addQuantity(e.target, orderArray);
    
        orderArray = newArray;
    
        displayOrderItems(menu, orderArray[0], orderArray[1], bundle);
        sessionStorage.setItem("orderArray", JSON.stringify(orderArray));
      }
    });


  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
