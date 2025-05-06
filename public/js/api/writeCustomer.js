export async function writeCustomer (customerID, fname, lname, phoneNum, houseNum, city, barangay, fbAcc, row) {
    const baseUrl = `http://localhost:3000/api/write`;

    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "data": [
                [customerID, fname, lname, phoneNum, houseNum, city, barangay, fbAcc]
            ],
            "range": `Customer!A${row}:H${row}`
        })
    });

    const result = await res.json();
    console.log(result);

}