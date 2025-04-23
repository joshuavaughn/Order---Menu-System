const theSheet = require ('../../utils/gSheetAuth')

const getCheckout = async (req, res) => {
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
        res.status(200).json({successful:true, msg:`Customer '${firstName} ${lastName}' Found!`});
    } else if (!filterData) {
        res.status(400).send(`No matching customer found for ${firstName} ${lastName}`);
    }
}

module.exports = getCheckout;