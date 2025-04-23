const {sheets} = require ('@googleapis/sheets');
const { GoogleAuth } = require('google-auth-library');
require('dotenv').config();

const auth = new GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function theSheet () {
    // console.log (process.env.GOOGLE_APPLICATION_CREDENTIALS);

    const client = await auth.getClient();

    const sheet = sheets({ version: 'v4', auth: client });

    return sheet;
}

module.exports = theSheet;