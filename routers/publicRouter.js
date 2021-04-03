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
    editPicture,
    editPictureInStorage,
} = require('../controllers');


router
    .route('/user')
    .post(logger,register, registerResponse) //for register 
    .put(logger,saveUserProfileandBackgroundPicture, editUser); //for edit user profile = edit picture file in /storage then edit tbl_user
router
    .route('/user/:user_id')
    .get(logger, getUserProfile); // get user profile to show frontend 
router
    .route('/categories')
    .post(logger, subscribeCategories) // user subscribe to categories in register process 
    .get(logger, getCategories); //mock 
router
    .route('/topics')
    .get(logger, getTopics); //mock 
router
    .route('/post')
    .post(logger,createPost, createPostResponse) // user create post 
    .put(logger, editPictureInStorage, editPicture); // user edit post = edit picture file in /storage then edit tbl_pictures
router
    .route('/post/:user_id')
    .get(logger,getUserPost); // get all posts form user 
router
    .route('/Login')
    .post(logger, letLogin);
// router.route('/admin/categories').post(require('../models/createCategories')) // create mock in DB DO NOT CALL THIS API
module.exports = router;
