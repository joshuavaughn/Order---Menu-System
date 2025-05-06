const theSheet = require ('../../utils/gSheetAuth')

const getFoodID = async (req,res) => {
    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Order!A'
    })

    const data = sheetData.data.values;

    res.status(200).json({ 
        successful: true, 
        msg: "FoodID retrieved successfully",
        data: data // <-- sending filterData here
    });
}

module.exports = getFoodID;
