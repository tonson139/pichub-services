const express = require('express');
const router = express.Router();
const multerBodyParser = require('multer')().any();


const { 
    register, 
    getAgreementTerm,
    subscribeCategories,
    getCategories,
    getTopics,
    login,
} = require('../controllers');

router
    .route('/user')
    .post(multerBodyParser, register) // for register 
router 
    .route('/agreement')
    .get(getAgreementTerm); // get term of use while register
router
    .route('/categories')
    .post(subscribeCategories) // user subscribe to categories in register process 
    .get(getCategories); // mock 
router
    .route('/topics')
    .get(getTopics); // mock 
    router
    .route('/login')
    .post(login); 
module.exports = router;
