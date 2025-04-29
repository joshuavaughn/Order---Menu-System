import { filterThis } from "../utils/filter.js";
import { fetchJson } from "../utils/fetchJson.js";
import { fetchMenu } from "../api/reviewApi.js";
import { createFooodImage } from "../utils/createFoodImage.js";
import { createFooodTitle } from "../utils/createFoodTitle.js";
import { createReviewCard } from "../utils/createReviewCard.js"

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const food = params.get("food");

  try {
    const menu = await fetchJson();

    const filteredData = filterThis(menu, "", "", food);

    const foodImage = document.querySelector("#food-image");
    const image = createFooodImage(filteredData[0]);
    foodImage.appendChild(image);

    const foodTitle = document.querySelector("#food-title");
    const title = createFooodTitle(filteredData[0]);
    foodTitle.appendChild(title);

    const review = await fetchMenu(filteredData[0].id);

    const reviews = document.querySelector("#reviews");

    console.log(`review`);
    console.log(review);

    review.forEach(data => {
        const div = createReviewCard(data);
        reviews.appendChild(div);
      });
  


  } catch (error) {
    console.log("Failed to load menu:", error);
  }
});
