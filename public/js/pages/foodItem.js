import { filterThis } from "../utils/filter.js";
import { fetchJson } from "../utils/fetchJson.js";
import { fetchReview } from "../api/reviewApi.js";
import { createFooodImage } from "../utils/createFoodImage.js";
import { createFooodTitle } from "../utils/createFoodTitle.js";
import { createReviewCard } from "../utils/createReviewCard.js";
import { setBundle } from "../utils/setBundle.js"

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const food = params.get("food");
  const section = params.get("section");

  try {
    const menu = await fetchJson();

    const filteredData = filterThis(menu, "", "", food);

    const foodImage = document.querySelector("#food-image");
    const image = createFooodImage(filteredData[0]);
    foodImage.appendChild(image);

    const foodTitle = document.querySelector("#food-title");
    const title = createFooodTitle(filteredData[0]);
    foodTitle.appendChild(title);

    setBundle(section);

    const review = await fetchReview(filteredData[0].id);

    let orderArray = [[], []]; // [0] = light, [1] = heavy

    const selectedFood = [filteredData[0].id, 1];

    if (filteredData[0].section == "light") {
      orderArray[0].push(selectedFood);
    } else {
      orderArray[1].push(selectedFood);
    }

    sessionStorage.setItem("orderArray", JSON.stringify(orderArray));

    const reviews = document.querySelector("#reviews");

    review.forEach((data) => {
      const div = createReviewCard(data);
      reviews.appendChild(div);
    });
  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
