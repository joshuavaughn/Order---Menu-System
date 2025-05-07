export async function rowNum (table) {    
    const baseUrl = `http://localhost:3000/api/getRow/${table}`;

    const res = await fetch (baseUrl, 
        {
            method: 'GET'
        })
    const result = await res.json();

    if (!result.successful) {
        console.log(`Failed to retrieve Review Data`);
    }

    return result.data.length + 1   ;
}