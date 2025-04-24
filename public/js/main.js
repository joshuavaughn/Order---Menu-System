import { fetchMenu } from './api/menuApi.js';
import { createMenuItemCard } from './utils/menuCard.js';
import { filterThis } from './utils/filter.js';

document.addEventListener('DOMContentLoaded', async () => {
    const menuContainer = document.querySelector('#menu-items');

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');

    console.log(category); // "drinks"

    try {
        const menu = await fetchMenu();

        const filteredData = filterThis (menu, category);

        filteredData.forEach(menuItem => {
            // console.log (menuItem.name);
            const menuCard = createMenuItemCard(menuItem);
            menuContainer.appendChild(menuCard);
        });
    } catch (error) {
        console.log('Failed to load menu:', error);
    }
});