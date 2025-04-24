export function filterThis (menu, category, bundle) {
    if (category == 'Everything') {
        return (menu);
    }

    let filteredData = [];

    if (bundle == "") {
        filteredData =  menu.filter(item => {
            return item.category === category;
        });
    } else {
        const newBundle = bundle.toLowerCase();

        filteredData =  menu.filter(item => {
            return item.category === category && item.section === newBundle;
        });
    }
    
    console.log(filteredData);

    return filteredData;
}