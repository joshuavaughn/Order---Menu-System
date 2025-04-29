import { createMenuItemCard } from '../utils/createMenuCard.js';
import { filterThis } from '../utils/filter.js';
import { fetchJson } from '../utils/fetchJson.js';

document.addEventListener('DOMContentLoaded', async () => {
    const menuContainer = document.querySelector('#menu-items');

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const section = params.get('section');

    try {
        const menu = await fetchJson();

        const filteredData = filterThis (menu, category, section);

        filteredData.forEach(menuItem => {
            const menuCard = createMenuItemCard(menuItem);
            menuContainer.appendChild(menuCard);
        });
    } catch (error) {
        console.log('Failed to load menu:', error);
    }

    const foodItems = document.querySelectorAll(".food-item");
    const lightOrder = document.querySelector("#Light-Order");

    foodItems.forEach((foodItem) => {   
    foodItem.addEventListener("click", (e) => {

        const selectedFood = document.createElement("li");
        selectedFood.id = `${foodItem.id}`;
        selectedFood.classList.add("list-group-item");

        selectedFood.innerHTML = `
        ${foodItem.id}
        `;

        lightOrder.appendChild(selectedFood);

        // const value = foodItem.id;
        
        // window.location.href = `foodItem.html?food=${value}`;
    })
})
});