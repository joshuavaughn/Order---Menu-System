
const fs = require ('fs')
const theSheet = require ('../../utils/gSheetAuth')

const getMenu = async (req, res) => {

    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Menu!A1:G49', //hardcoded fix it
    });

    fs.writeFile('./menu.json', JSON.stringify(sheetData.data, null, 2), error => {
        if (error) {
            console.log(error);
            res.status(500).json({successful:false, msg:`Failed to write menu.json`});
        }
    });

    res.status(200).json({successful:true, msg:`Menu Data retrieved successfully`});
}

module.exports = getMenu;