export async function fetchMenu (index) {    
    const baseUrl = `http://localhost:3000/api/reviews/${index}`;

    const res = await fetch (baseUrl, 
        {
            method: 'GET'
        })
    const result = await res.json();

    if (!result.successful) {
        console.log(`Failed to retrieve Review Data`);
    }

    return result.data.map(row => ({
        name: row[0],
        review: row[1],
        foodId: row[2],
        date: row[3],
        star: row[4],
    }));
}