export function createReviewCard(item) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(`review`);
  newDiv.innerHTML = `
    <div class="p-4 card text-black border rounded">
        <h3 class="reviewName card-title">${item.name}</h3>
        <div id="reviewDetails" class="card-text">
            <div id="${item.star}"></div>
            <p>${item.date}</p>
        </div>
        <h4 class="theReview">${item.review}</h4>
    </div>
    <hr>
  `;
  return newDiv;
}

