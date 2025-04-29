export function createFooodTitle(item) {
//   const foodImage = document.createElement("img");
//   foodImage.id = `${item.name}`;
//   foodImage.src = `${item.image}`;
//   foodImage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
//   foodImage.style.width = "28rem";

  const card = document.createElement("div");
  card.innerHTML = `
        <h1>${item.name}</h1>
        <p>₱${item.price} - <span>${item.detail}</span></p>
        `;

  return card;
}
