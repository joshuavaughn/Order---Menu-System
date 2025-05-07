import { createOrderItemList } from "../utils/createOrderItemList.js"

export function displayOrderItems (menu, light, heavy, bundle) {
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
    if (bundle == "3LM" || bundle == "2L1H") {
        light.forEach(item => {
            const liElement = createOrderItemList(menu[item[0]].name, item[1], item[0]);
            lightOrder.appendChild(liElement);
        });
    }
    if (bundle == "2HM" || bundle == "2L1H") {
        heavy.forEach(item => {
            const liElement = createOrderItemList(menu[item[0]].name, item[1], item[0]);
            heavyOrder.appendChild(liElement);
        });
    }


}