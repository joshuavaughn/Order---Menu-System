export function setOrderTracker(bundle) {
  const orderTracker = document.querySelector("#order-tracker");
  const sectionOptions = document.querySelector("#bundle-section");

  let toReturn = "";

  if (bundle == "2HM") {
    orderTracker.innerHTML = `
        <ul class="row list-group mb-3 d-none d-xl-block d-lg-block d-md-block" id="Heavy-Order">
            <li class="list-group-item active list-group-item-dark" aria-current="true">
                <h4>Bundle Guide</h4>
                <p>Select at least 2 Heavy Meals</p>
            </li>
        </ul>`;
        sectionOptions.classList.add("d-none");
        toReturn = "heavy";
  } else if (bundle == "3LM") {
    orderTracker.innerHTML = `
        <ul class="row list-group mb-3 d-none d-xl-block d-lg-block d-md-block" id="Light-Order">
            <li class="list-group-item active list-group-item-dark" aria-current="true">
                <h4>Bundle Guide</h4>
                <p>Select at least 3 Light Meals</p>
            </li>
        </ul>`;
        sectionOptions.classList.add("d-none");
        toReturn = "light";
  } else if (bundle == "2L1H") {
    orderTracker.innerHTML = `
        <ul class="row list-group mb-3 d-none d-xl-block d-lg-block d-md-block" id="Light-Order">
            <li class="list-group-item active list-group-item-dark" aria-current="true">
            <h4>Bundle Guide</h4>
            <p>Select at least 2 Light Meals</p>
        </li>
        </ul>
        <!-- bundle guide -->
        <ul class="row list-group mb-3 d-none d-xl-block d-lg-block d-md-block" id="Heavy-Order">
            <li class="list-group-item active list-group-item-dark" aria-current="true">
                <h4>Bundle Guide</h4>
                <p>Select at least 1 Heavy Meals</p>
            </li>
        </ul>`;
  }

  return toReturn;
}
