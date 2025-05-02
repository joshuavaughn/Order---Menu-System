const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const section = params.get('section');
const bundle = params.get('bundle');

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    category.addEventListener("click", (e) => {

        const path = window.location.pathname;
        const pageName = path.split("/").pop();

        const value = category.innerHTML;
        
        if (!bundle == "") {
            window.location.href = `${pageName}?category=${value}&section=${section}&bundle=${bundle}`;
        } else {
            window.location.href = `${pageName}?category=${value}&section=${section}`;
        }
    })
})

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
    section.addEventListener("click", (e) => {

        const path = window.location.pathname;
        const pageName = path.split("/").pop();

        const value = section.innerHTML;

        if (!bundle == "") {
            if (value === 'All') {
                // console.log(`value = All`);
                window.location.href = `${pageName}?category=${category}&section=&bundle=${bundle}`;
            } else {
                // console.log (value);
                window.location.href = `${pageName}?category=${category}&section=${value}&bundle=${bundle}`;
            }
        } else {
            if (value === 'All') {
                // console.log(`value = All`);
                window.location.href = `${pageName}?category=${category}&section=`;
            } else {
                // console.log (value);
                window.location.href = `${pageName}?category=${category}&section=${value}`;
            }
        }
    })
})
