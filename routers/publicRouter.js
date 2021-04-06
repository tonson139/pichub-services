const express = require('express');
const router = express.Router();
const multerBodyParser = require('multer')().any();

const {
    subscribeCategories,
    getCategories,
    editUser,
    logger,
    createPost,
    getTopics,
    letLogin,
    getUserProfile,
    register,
    createPostResponse,
    getUserPost,
    editPicture,
    getTimeline,
    getAgreementTerm,
    _controllerTest,
} = require('../controllers');


router
    .route('/user')
    .post(multerBodyParser, register) //for register 
    .put(multerBodyParser, editUser); //for edit user profile = edit picture file in /storage then edit tbl_user
router
    .route('/user/:user_id')
    .get(getUserProfile); // get user profile to show frontend 
router
    .route('/categories')
    .post(subscribeCategories) // user subscribe to categories in register process 
    .get(getCategories); //mock 
router
    .route('/topics')
    .get(getTopics); //mock 
router
    .route('/post')
    .post(createPost, createPostResponse) // user create post 
    .put(multerBodyParser, editPicture); // user edit post = edit picture file in /storage then edit tbl_pictures
router
    .route('/post/:user_id')
    .get(getUserPost); // get all posts form user 
router
    .route('/Login')
    .post(letLogin);
router
    .route('/timeline/:user_id')
    .get(getTimeline); // get timeline screen for user
router 
    .route('/agreement')
    .get(getAgreementTerm);
// router.route('/admin/categories').post(require('../models/MockcreateCategories')) // create mock in DB DO NOT CALL THIS API
// router.route('/test').post(_controllerTest)
module.exports = router;
