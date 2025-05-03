import { createOrderItemList } from "../utils/createOrderItemList.js"

export function displayOrderItems (menu, index, orderItems, section) {
    const lightOrder = document.querySelector("#Light-Order");
    const heavyOrder = document.querySelector("#Heavy-Order");

    
    const order = orderItems.filter(data => {
        return data[0] === index;
    })

    console.log (`order`);
    console.log (order);
    console.log (order[0][1]);

    const liElement = createOrderItemList(menu[index].name, order[0][1]);

    //remove existing list
    if (section == "light") {
        const lightItems = lightOrder.querySelectorAll("li");
        lightItems.forEach((order, index) => {
            if (index !== 0) {
                order.remove();
            }
        });    
        lightOrder.appendChild(liElement);
    } else {
        const heavyItems = heavyOrder.querySelectorAll("li");
        heavyItems.forEach((order) => {
            console.log(order);
        });   
        heavyOrder.appendChild(liElement);
    }

    console.log(lightOrder);
    console.log(heavyOrder);

    console.log(`orderItems`);
    console.log(orderItems);


    // console.log (menu[index].name);
}