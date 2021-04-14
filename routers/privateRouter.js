const express = require('express');
const router = express.Router();
const multerBodyParser = require('multer')().any();

const {
    editUser,
    getUserProfile,
    getPictureByCategory,
    createPost,
    createPostResponse,
    editPicture,
    getUserPost,
    getTimeline,
    editUserText,
    _controllerTest,
} = require('../controllers');


router
    .route('/user')
    .put(multerBodyParser, editUser); //for edit user profile = edit picture file in /storage then edit tbl_user
router
    .route('/user_account')
    .post(editUserText); //for edit user profile = edit picture file in /storage then edit tbl_user
router
    .route('/user/:user_id')
    .get(getUserProfile); // get user profile to show frontend 
router
    .route('/categories/:category_id?')
    .get(getPictureByCategory);
router
    .route('/post')
    .post(createPost, createPostResponse) // user create post 
    .put(multerBodyParser, editPicture); // user edit post = edit picture file in /storage then edit tbl_pictures
router
    .route('/post/:user_id')
    .get(getUserPost); // get all posts form user 
router
    .route('/timeline/:user_id')
    .get(getTimeline); // get timeline screen for user

// router.route('/admin/categories').post(require('../models/MockcreateCategories')) // create mock in DB DO NOT CALL THIS API
router.route('/test')
    .post(multerBodyParser, _controllerTest)
    .put(multerBodyParser, _controllerTest);
module.exports = router;
