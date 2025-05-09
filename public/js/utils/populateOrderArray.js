import { checkSection } from "./checkSection.js";

export function populateOrderArray (menu, item, orderArray) {
    
    // let orderArray = [[], []];

    const value = item.id;
    const index = value.slice(5); // extract index
    const section = checkSection(menu, index); // "light" or "heavy"

    // Determine target array based on section
    const targetArray = section === "light" ? orderArray[0] : orderArray[1];

    // Check if item already exists in targetArray
    let found = false;
    for (let i = 0; i < targetArray.length; i++) {
      if (targetArray[i][0] === index) {
        targetArray[i][1] += 1; // increment quantity
        found = true;
        break;
      }
    }

    // If not found, add as new entry with quantity = 1
    if (!found) {
      targetArray.push([index, 1]);
    }

    return orderArray;
}