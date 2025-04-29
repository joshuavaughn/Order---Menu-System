export function createMenuItemCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("p-2");
  card.classList.add("food-item");
  card.id = `${item.name}`;
  card.style.width = "17rem";
  card.style.height = "18rem";

  card.innerHTML = `
    <img src="${item.image}" class="card-img-top img-fluid" alt="Food-Image" style="height: 200px; width: 255px; object-fit: cover;">
    <div class="card-body text-center p-2">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">$${item.price} - ${item.detail}</p>
    </div>
    `;

  return card;
}
