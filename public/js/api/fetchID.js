export async function fetchID (table) {    
    const baseUrl = `http://localhost:3000/api/${table}`;

    const res = await fetch (baseUrl, 
        {
            method: 'GET'
        })
    const result = await res.json();

    if (!result.successful) {
        console.log(`Failed to retrieve Review Data`);
    }

    console.log(result);

    return result.data.length;
}