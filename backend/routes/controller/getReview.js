const theSheet = require ('../../utils/gSheetAuth')

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

    // return filterData;
    // console.log (filterData);
    // res.status(200).json({successful:true, msg:`Review Data retrieved successfully`});

    res.status(200).json({ 
        successful: true, 
        msg: "Review Data retrieved successfully",
        data: filterData // <-- sending filterData here
    });
}

module.exports = getReview;
