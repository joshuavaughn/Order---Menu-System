import { createOrderItemList } from "../utils/createOrderItemList.js"

export function displayOrderItems (menu, index, orderItems, bundle) {
    const lightOrder = document.querySelector("#Light-Order");
    const heavyOrder = document.querySelector("#Heavy-Order");

    //remove existing list
    if (bundle == "3LM") {
        const lightItems = lightOrder.querySelectorAll("li");
        lightItems.forEach((order, index) => {
            if (index !== 0) {
                order.remove();
            }
        });    
    } else if (bundle == "2HM") {
        const heavyItems = heavyOrder.querySelectorAll("li");
        heavyItems.forEach((order, index) => {
            if (index !== 0) {
                order.remove();
            }
        });   
    } else if (bundle == "2L1H"){
        const lightItems = lightOrder.querySelectorAll("li");
        lightItems.forEach((order, index) => {
            if (index !== 0) {
                order.remove();
            }
        });    
        const heavyItems = heavyOrder.querySelectorAll("li");
        heavyItems.forEach((order, index) => {
            if (index !== 0) {
                order.remove();
            }
        });   
    }

    //write list
    orderItems.forEach(item => {
        const liElement = createOrderItemList(menu[item[0]].name, item[1]);

        if (item[2] == "light") {
            lightOrder.appendChild(liElement);
        } else if (item[2] == "heavy") {
            heavyOrder.appendChild(liElement);
        }
    });

}