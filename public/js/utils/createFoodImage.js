export function createFooodImage(item) {
    const foodImage = document.createElement("img");
    foodImage.id = `${item.name}`;
    foodImage.src = `${item.image}`;
    foodImage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    foodImage.style.width = "28rem";
  
    return foodImage;
  }
  