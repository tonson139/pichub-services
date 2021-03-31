const express = require('express');
const router = express.Router();

const {
    subscribeCategories,
    getCategories,
    registerResponse,
    editUser,
    logger,
    createPost,
    getTopics,
    letLogin,
    user,
    register,
} = require('../controllers');


router
    .route('/user')
    .post(logger,register, registerResponse)
    .put(logger,editUser);

router
    .route('/getUser/:id?')
    .get(logger, user);

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
router
    .route('/Login')
    .post(logger, letLogin);

module.exports = router;
