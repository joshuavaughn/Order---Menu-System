export function filterThis (menu, category, section, name) {
    let filteredData = [];
    
    if (!name == '') {
        filteredData = menu.filter (item => {
            return item.name === name;
        })
    } else if (category == 'Everything') {
        return (menu);
    } else {    
        if (section == "") {
            filteredData =  menu.filter(item => {
                return item.category === category;
            });
        } else {
            const newSection = section.toLowerCase();
    
            filteredData =  menu.filter(item => {
                return item.category === category && item.section === newSection;
            });
        }    
    }
    

    return filteredData;
}