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
    getUserProfile,
    register,
    saveUserProfileandBackgroundPicture,
    createPostResponse,
    getUserPost,
} = require('../controllers');


router
    .route('/user')
    .post(logger,register, registerResponse)
    .put(logger,saveUserProfileandBackgroundPicture, editUser);
router
    .route('/user/:user_id')
    .get(logger, getUserProfile);

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
    .post(logger,createPost, createPostResponse); 
router
    .route('/post/:user_id')
    .get(logger,getUserPost); 
router
    .route('/Login')
    .post(logger, letLogin);

module.exports = router;
