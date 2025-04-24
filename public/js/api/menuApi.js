const baseUrl = 'http://localhost:3000/api/';

export async function fetchMenu () {
    const res = await fetch (baseUrl, 
        {
            method: 'GET'
        })
    const data = await res.json();

    if (!data.successful) {
        throw new Error('Backend error');
    }

    const menu = await fetch ('../../menu.json');
    const menuItems = await menu.json();

    return menuItems.values.slice(1).map(row => ({
        name: row[1],
        price: row[3],
        category: row[4],
        section: row[2],
        detail: row[5],
        image: row[6],
    }));
}