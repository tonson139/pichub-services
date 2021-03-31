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
<<<<<<< HEAD
=======
    letLogin,
    user
>>>>>>> 282c997... 'update'
} = require('../controllers');


router
    .route('/user')
    .post(logger,register)
    .put(logger,editUser);

router
<<<<<<< HEAD
=======
    .route('/getUser/:id?')
    .get(logger, user);

router
>>>>>>> 282c997... 'update'
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
<<<<<<< HEAD

module.exports = router;
=======
router
    .route('/Login')
    .post(logger, letLogin);

module.exports = router;
>>>>>>> 282c997... 'update'
