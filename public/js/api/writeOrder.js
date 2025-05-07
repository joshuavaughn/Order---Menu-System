export async function writeOrder (OrderID, orderDate, time, deliveryDate, notes, customerID, row) {
    const baseUrl = `http://localhost:3000/api/write`;

    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": [
                [OrderID, orderDate, time, deliveryDate, notes, "pending", customerID, "not paid", "NA", "NA"]
            ],
            "range": `Order!A${row}:J${row}`
        })
    });

    const result = await res.json();
    console.log(result);

}