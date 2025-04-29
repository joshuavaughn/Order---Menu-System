const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const section = params.get('section');

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    category.addEventListener("click", (e) => {
        const value = category.innerHTML;
        console.log (value);
        window.location.href = `menu.html?category=${value}&section=${section}`;
    })
})

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
    section.addEventListener("click", (e) => {
        const value = section.innerHTML;

        if (value === 'All') {
            // console.log(`value = All`);
            window.location.href = `menu.html?category=${category}&section=`;
        } else {
            // console.log (value);
            window.location.href = `menu.html?category=${category}&section=${value}`;
        }
    })
})
