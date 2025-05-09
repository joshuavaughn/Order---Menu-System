const placeOrder = document.querySelector("#Place-Order");
const orderNotes = document.querySelector("#order-notes");

placeOrder.addEventListener("click", () => {

  const orderArray = JSON.parse(sessionStorage.getItem("orderArray"));

  const params = new URLSearchParams(window.location.search);

  const bundle = params.get("bundle")

  let lightOrderLength = 0;
  let heavyOrderLength = 0;

    // get light and heavy order quantity
    orderArray[0].forEach(item => {
        lightOrderLength += item[1];
    });
    orderArray[1].forEach(item => {
        heavyOrderLength += item[1];
    });

    let validOrder = true;
    let invalidMessage = "";

    if (bundle == "2L1H") {
        if (lightOrderLength < 2) {
            invalidMessage = `Your order must have at least 2 light items`;
            validOrder = false;
        }
        if (heavyOrderLength < 1) {
            invalidMessage = `Your order must have at least 1 heavy item`;
            validOrder = false;
        }
    } else if (bundle == "3LM") {
        if (lightOrderLength < 3) {
            invalidMessage = `Your order must have at least 3 light items`;
            validOrder = false;
        }
    } else if (bundle == "2HM") {
        if (heavyOrderLength < 2) {
            invalidMessage = `Your order must have at least 2 heavy items`;
            validOrder = false;
        }
    }

    orderArray[2] = orderNotes.value;

    sessionStorage.setItem("orderArray", JSON.stringify(orderArray));

    if (validOrder == true) {
        console.log(`valid order`);
        // window.location.href = `checkout.html`;
    } else {
        console.log(`invalid`)
        const invalidOrder = document.querySelector('#invalid-order');
        invalidOrder.innerHTML = invalidMessage;
        invalidOrder.classList.remove("d-none");
        // invalidOrder.classList.add("d-block");
    }

});