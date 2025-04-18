const theSheet = require ('../../utils/sheet')

const getReview = async (req,res) => {
    const {id} = req.params;
    let sheet = await theSheet();

    const sheetData = await sheet.spreadsheets.values.get({
        spreadsheetId: process.env.spreadsheetId,
        range: 'Reviews!A2:E'
    })

    const data = sheetData.data.values;

    const filterData = data.filter(x => x[2] == id);

    console.log (filterData);
    res.status(200).json({successful:true, msg:`Review Data retrieved successfully`});
}

module.exports = getReview;
