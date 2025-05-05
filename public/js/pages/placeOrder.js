const placeOrder = document.querySelector("#Place-Order");
const orderNotes = document.querySelector("#order-notes");

placeOrder.addEventListener("click", () => {

  const orderArray = JSON.parse(sessionStorage.getItem("toStore"));

  const params = new URLSearchParams(window.location.search);

  const bundle = params.get("bundle")

  let lightOrderLength = 0;
  let heavyOrderLength = 0;

    // get light and heavy order quantity
    orderArray[0].forEach(item => {
        console.log (item);
        lightOrderLength += item[1];
    });
    orderArray[1].forEach(item => {
        console.log (item);
        heavyOrderLength += item[1];
    });

    console.log(lightOrderLength);
    console.log(heavyOrderLength);

    console.log(`bundle = ${bundle}`)

    if (bundle == "2L1H") {
        if (lightOrderLength < 2) {
            console.log(`order must be at least 2 light items`);
        }
        if (heavyOrderLength < 1) {
            console.log(`order must be at least 1 heavy item`);
        }
    } else if (bundle == "3LM") {
        if (lightOrderLength < 3) {
            console.log(`order must be at least 3 light items`);
        }
    } else if (bundle == "2HM") {
        if (heavyOrderLength < 2) {
            console.log(`order must be at least 2 heavy items`);
        }
    }

    console.log(orderNotes.value);
    orderArray[2] = orderNotes.value;

    console.log(orderArray);

    sessionStorage.setItem("orderArray", JSON.stringify(orderArray));

    window.location.href = `checkout.html`;

});