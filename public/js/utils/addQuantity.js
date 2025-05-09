export function addQuantity (element, orderArray) {
  const index = element.id[9];

  if (element.id[0] == 'i') {
    for (let i = 0; i < 2; i++) {
      orderArray[i].forEach(item => {
        if(item[0] == index) {
          item[1] ++;
        }
      });
    }
  } else {
    for (let i = 0; i < 2; i++) {
      orderArray[i].forEach(item => {
        if(item[0] == index) {
          item[1] --;
        }
      });
    }
  }

  return orderArray;

}