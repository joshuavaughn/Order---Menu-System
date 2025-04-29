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

    // const menu = await fetch ('../../menu.json');
    // const menuItems = await menu.json();

    return `successfully fetch data`;
}