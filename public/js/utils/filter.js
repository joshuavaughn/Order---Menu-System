export function filterThis (menu, category, section, name, bundle) {
    let filteredData = [];

    //checks for category
    if (category != '' && category != 'Everything') {
        filteredData = menu.filter(data => {
            return data.category == category;
        })
    } 

    //checks for section
    if (section != "") {
        const newSection = section.toLowerCase();
    
        filteredData =  menu.filter(item => {
            return item.category === category && item.section === newSection;
        });
    }

    //filter for name
    if (!name == '') {
        filteredData = menu.filter (item => {
            return item.name === name;
        })
    }

    //for bundle
    if (bundle == '2HM') {
        if (category != '' && category != 'Everything') {
            filteredData = menu.filter(data => {
                return data.category == category && data.section == 'heavy';
            })
        } else if (category == 'Everything') {
            filteredData = menu.filter(data => {
                return data.section === "heavy";
            })
        }
    } else if (bundle == '3LM') {
        if (category != '' && category != 'Everything') {
            filteredData = menu.filter(data => {
                return data.category == category && data.section == 'light';
            })
        } else if (category == 'Everything') {
            filteredData = menu.filter(data => {
                return data.section === "light";
            })
        }
    } else if (bundle == '2L1H') {
        return menu;
    }
    
    return filteredData;
}