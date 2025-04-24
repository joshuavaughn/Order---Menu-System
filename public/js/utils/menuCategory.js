const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
    category.addEventListener("click", (e) => {
        const value = category.innerHTML;
        console.log (value);
        window.location.href = `menu.html?category=${value}`;
    })
})