export async function fetchJson () {
    const menu = await fetch ('../../menu.json');
    const menuItems = await menu.json();

    return menuItems.values.slice(1).map(row => ({
        name: row[1],
        price: row[3],
        category: row[4],
        section: row[2],
        detail: row[5],
        image: row[6],
        id: row[0]
    }));
  }
  