const subscribeCategories = require('./subscribeCategories');
const getCategories = require('./getCategories');
const editUser = require('./editUser');
const logger = require('./logger');
const createPost = require('./createPost');
const getTopics = require('./getTopics');
const letLogin = require('./letLogin');
const getUserProfile = require('./getUserProfile');
const register = require('./register');
const createPostResponse     = require('./createPostResponse');
const getUserPost = require('./getUserPost');
const editPicture = require('./editPicture');
const getTimeline = require('./getTimeline');
const getAgreementTerm = require('./getAgreementTerm');
const getPictureByCategory = require('./getPictureByCategory');
const login = require('./login');
const _controllerTest = require('./_contollersTest');
const editUserText = require('./editUserText');

module.exports = {
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
    getPictureByCategory,
    login,
    editUserText,
    _controllerTest,
};
