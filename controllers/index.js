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
const saveUserProfileandBackgroundPicture = require('./saveUserProfileandBackgroundPicture');
const getUserPost = require('./getUserPost');
const editPicture = require('./editPicture');
const editPictureInStorage = require('./editPictureInStorage');
const getTimeline = require('./getTimeline');
const getAgreementTerm = require('./getAgreementTerm');
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
    saveUserProfileandBackgroundPicture,
    createPostResponse,
    getUserPost,
    editPicture,
    editPictureInStorage,
    getTimeline,
    getAgreementTerm,
};
