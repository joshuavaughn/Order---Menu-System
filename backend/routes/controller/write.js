const theSheet = require ('../../utils/gSheetAuth')

const write =  async (req, res) => {
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
    
        res.status(200).send({ successful:true, msg:`Review Data retrieved successfully`});
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to write to Google Sheet' });
    }
}

module.exports = write;