const theSheet = require ('../../utils/gSheetAuth')

const getRow = async (req,res) => {
    const {table} = req.params;
    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: `${table}!A:A`
    })

    const data = sheetData.data.values;

    res.status(200).json({ 
        successful: true, 
        msg: "FoodID retrieved successfully",
        data: data
    });
}

module.exports = getRow;
