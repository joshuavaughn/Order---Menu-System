export async function writeOrderItems(orderID, foodID, quantity, row) {
  const baseUrl = `http://localhost:3000/api/write`;

  console.log(orderID, foodID, quantity, row);

  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [[orderID, foodID, quantity]],
      range: `OrderItems!A${row}:C${row}`,
    }),
  });

  const result = await res.json();
  console.log(result);
}
