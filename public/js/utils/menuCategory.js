const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const bundle = params.get('bundle');

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    category.addEventListener("click", (e) => {
        const value = category.innerHTML;
        console.log (value);
        window.location.href = `menu.html?category=${value}&bundle=${bundle}`;
    })
})

const bundles = document.querySelectorAll(".section");

bundles.forEach((bundle) => {
    bundle.addEventListener("click", (e) => {
        const value = bundle.innerHTML;

        if (value === 'All') {
            // console.log(`value = All`);
            window.location.href = `menu.html?category=${category}&bundle=`;
        } else {
            // console.log (value);
            window.location.href = `menu.html?category=${category}&bundle=${value}`;
        }
    })
})
