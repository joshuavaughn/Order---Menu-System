export function createOrderItemList(name, quantity) {
//   const list = document.createElement("li");
//   list.classList.add = "list-group-item";

//   list.innerHTML = `
//         <h4>${name}</h4>
//         <p>quantity</p>
//     `;

  const selectedFood = document.createElement("li");
  selectedFood.id = `name`;
  selectedFood.classList.add("list-group-item");
  selectedFood.classList.add("d-flex");
  selectedFood.classList.add("align-items-center");
  selectedFood.innerHTML = `
        <p>${name}</p>
        <p class="ms-auto me-1">${quantity}</p>
        <div class="d-flex flex-column">
            <button type="button" class="btn btn-light py-1 px-2" id="increase">^</button>
            <button type="button" class="btn btn-light py-1 px-2" id="decrease">v</button>
        </div>
    `;

    return selectedFood;
}
