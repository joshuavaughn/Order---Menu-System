import { fetchMenu } from '../api/menuApi.js';
import { createMenuItemCard } from '../utils/menuCard.js';
import { filterThis } from '../utils/filter.js';

document.addEventListener('DOMContentLoaded', async () => {
    const menuContainer = document.querySelector('#menu-items');

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const bundle = params.get('bundle');

    try {
        const menu = await fetchMenu();

        const filteredData = filterThis (menu, category, bundle);

        filteredData.forEach(menuItem => {
            const menuCard = createMenuItemCard(menuItem);
            menuContainer.appendChild(menuCard);
        });
    } catch (error) {
        console.log('Failed to load menu:', error);
    }
});