export function setBundle(section) {
  const bundleContainer = document.querySelector("#bundle-container");

  if (section == "light") {
    bundleContainer.innerHTML = `
        <div class="col">
            <a href="./selectOrder.html?category=Everything&section=&bundle=3LM" class="btn btn-primary" role="button" id="3 Light Meals">
                <img src="https://placehold.co/250x300" alt="Chicken" class="img-fluid">
                <h3>3 Light Meals</h3>
            </a>
        </div>
        <div class="col">
            <a href="./selectOrder.html?category=Everything&section=&bundle=2L1H" class="btn btn-primary" role="button" id="2 Light 1 Heavy">
                <img src="https://placehold.co/250x300" alt="Chicken" class="img-fluid">
                <h3>2 Light 1 Heavy</h3>
            </a>
        </div>
        `;
  } else if (section == "heavy") {
    bundleContainer.innerHTML = `
    <div class="col">
        <a href="./selectOrder.html?category=Everything&section=&bundle=2HM" class="btn btn-primary" role="button" id="2 Heavy Meals">
            <img src="https://placehold.co/250x300" alt="Chicken" class="img-fluid">
            <h3>2 Heavy Meals</h3>
        </a>
    </div>
    <div class="col">
        <a href="./selectOrder.html?category=Everything&section=&bundle=2L1H" class="btn btn-primary" role="button" id="2 Light 1 Heavy">
            <img src="https://placehold.co/250x300" alt="Chicken" class="img-fluid">
            <h3>2 Light 1 Heavy</h3>
        </a>
    </div>
    `;
  }
}
