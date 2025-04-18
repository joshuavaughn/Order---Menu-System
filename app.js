const express = require ('express');
const {sheets} = require ('@googleapis/sheets');
const { GoogleAuth } = require('google-auth-library');
const fs = require ('fs')
require('dotenv').config();

const app = express();

app.use(express.json());

const auth = new GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function theSheet () {
    const client = await auth.getClient();

    const sheet = sheets({ version: 'v4', auth: client });

    return sheet;
}

app.get ('/', async (req, res) => {

    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Menu!A1:G49', //hardcoded fix it
    });

    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    console.log (sheetData.data); 

    
    fs.writeFile('./menu.json', JSON.stringify(sheetData.data, null, 2), error => {
        if (error) {
            console.log(error);
        }
    });

    res.send(sheetData.data)
})

app.get ('/reviews/:id', async (req,res) => {
    const {id} = req.params;
    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Reviews!A2:E'
    })

    const data = sheetData.data.values;

    const filterData = data.filter(x => x[2] == id);

    res.json(filterData);
})

app.get ('/checkout/:firstName/:lastName', async (req, res) => {
    // const { firstName, lastName } = req.body; 
    const {firstName} = req.params;
    const {lastName} = req.params;

    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Customer!A2:F'
    })

    const data = sheetData.data.values;
    
    const filterData = data.filter(row => {
        return row[1] === firstName && row[2] === lastName;
    });

    if (filterData) {
        console.log(filterData);
        res.status(200).json(filterData);
    } else if (!filterData) {
        res.status(400).send(`No matching customer found for ${firstName} ${lastName}`);
    }
})

app.post ('/write', async (req, res) => {
    try {
        const { data, range } = req.body;

        let sheet = await theSheet();
    
        if (!range) {
            return res.status(400).send({ error: 'Range is required.' });
        } else {
            console.log('The range is: ' + range);
        }
    
        await sheet.spreadsheets.values.update({
            spreadsheetId: process.env.spreadsheetId,
            range: range,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: data
            }
        });
    
        res.status(200).send({ message: 'Order written successfully!' });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to write to Google Sheet' });
    }
})

app.listen(3000, () => {
    console.log('listening to port 3000...')
})