export function filterThis (menu, category) {
    if (category == 'everything') {
        return (menu);
    }
    
    const filteredData =  menu.filter(item => {
        return item.category === category;
    });

    return filteredData;
}