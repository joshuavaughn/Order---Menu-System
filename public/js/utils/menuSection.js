const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
    section.addEventListener("click", (e) => {
        const value = section.innerHTML;
        console.log (value);
        window.location.href = `menu.html?section=${value}`;
    })
})