export function checkSection (menu, name) {
    console.log (menu);
    const index = menu.findIndex(food => food.name == name);

    console.log(index);
    console.log (`menu[index].section = ${menu[index].section}`);

    if (menu[index].section == "light") {
        return "light";
    } else {
        return "heavy";
    }
}