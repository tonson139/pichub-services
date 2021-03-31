const subscribeCategories = require('./subscribeCategories');
const getCategories = require('./getCategories');
const register = require('./register');
const editUser = require('./editUser');
const logger = require('./logger');
const createPost = require('./createPost');
const getTopics = require('./getTopics');
const letLogin = require('./letLogin');
const user = require('./userProfile');

module.exports = {
    subscribeCategories,
    getCategories,
    register,
    editUser,
    logger,
    createPost,
    getTopics,
    letLogin,
    user
};