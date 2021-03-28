const express = require('express');
const router = express.Router();

const {
    subscribeCategories,
    getCategories,
    register,
    editUser,
    logger,
    createPost,
    getTopics,
} = require('../controllers');


router
    .route('/user')
    .post(logger,register)
    .put(logger,editUser);

router
    .route('/categories')
    .post(logger, subscribeCategories)
    .get(logger, getCategories); //mock 
router
    .route('/topics')
    .get(logger, getTopics); //mock 
// router.route('/admin/categories').post(require('../models/createCategories')) // create mock in DB;

router
    .route('/post')
    .post(logger,createPost); 

module.exports = router;
