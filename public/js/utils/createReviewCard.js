export function createReviewCard(item) {
  // return card;
  const newDiv = document.createElement("div");
  newDiv.classList.add(`review`);
  newDiv.innerHTML = `
        <div class="p-4">
            <h3 class="reviewName">${item.name}</h3>
            <div id="reviewDetails">
                <div id="${item.star}"></div>
                <p>${item.date}</p>
            </div>
            <h4 class="theReview">${item.review}</h4>
        </div>
        <hr>
    `;
    return newDiv;
}
