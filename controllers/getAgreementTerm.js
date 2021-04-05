const { readFile } = require('fs/promises');
const path = require('path');

const getAgreementTerm = async (req, res, next) => {
    try {
        agreementPath = path.join(__dirname,'..','/views/agreement.txt');
        const agreement = await readFile(agreementPath);
        res.status(200).send(agreement);
    } catch(error) {
        console.error(error);
        res.status(400);
    }
}
module.exports = getAgreementTerm;