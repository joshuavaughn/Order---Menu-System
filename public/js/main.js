import { fetchMenu } from '../js/api/menuApi.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const menu = await fetchMenu();
        console.log(menu);
    } catch (error) {
        console.log('Failed to load menu:', error);
    }
})