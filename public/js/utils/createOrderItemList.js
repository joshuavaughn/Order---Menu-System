export function createOrderItemList(name, quantity, index) {
    // const newIndex = (index * 1) + 1;
    // console.log(newIndex);
    const selectedFood = document.createElement("li");
  selectedFood.id = `${name}`;
  selectedFood.classList.add("list-group-item");
  selectedFood.classList.add("d-flex");
  selectedFood.classList.add("align-items-center");
  selectedFood.innerHTML = `
        <p>${name}</p>
        <p class="ms-auto me-1" id="quantity-${index}">${quantity}</p>
        <div class="d-flex flex-column">
            <button type="button" class="btn btn-light py-1 px-2 quantity" id="increase-${index}">^</button>
            <button type="button" class="btn btn-light py-1 px-2 quantity" id="decrease-${index}">v</button>
        </div>
    `;

    return selectedFood;
}
