export function checkSection (menu, index) {

    if (menu[index].section == "light") {
        return "light";
    } else {
        return "heavy";
    }
}