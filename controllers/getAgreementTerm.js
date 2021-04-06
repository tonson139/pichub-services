/**
 * @description     - get "term of use" for user in register processs    
 * @routes          - [GET] /agreement 
 */

const { readFile } = require('fs/promises');
const path = require('path');

const getAgreementTerm = async (req, res, next) => {
    try {
        agreementPath = path.join(__dirname,'..','/views/agreement.txt');
        const agreement = await readFile(agreementPath);
        res.status(200).send(agreement);
    } catch(error) {
        next(error);
    }
}
module.exports = getAgreementTerm;