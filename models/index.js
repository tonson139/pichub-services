const createCategoriesAssociatedPicture = require('./createCategoriesAssociatedPicture');
const createCategoriesUserFollow = require('./createCategoriesUserFollow');
const createPicture = require('./createPicture');
const createUser = require('./createUser');
const deleteCategoriesPicturesAssociated = require('./deleteCategoriesPicturesAssociated');
const getPicutresByCategoriesUserFollow = require('./getPicutresByCategoriesUserFollow');
const postLogin = require('./postLogin');
const readCategoriesPictureAssociatedByPictureIds = require('./readCategoriesPictureAssociatedByPictureIds');
const readPictureByPictureIds = require('./readPictureByPictureIds');
const readPictureByUserId = require('./readPictureByUserId');
const readUser = require('./readUser');
const updatePicture = require('./updatePicture');
const updateUser = require('./updateUser');
const readPicturesByCategoryIds = require('./readPicturesByCategoryIds');

module.exports = {
    createCategoriesAssociatedPicture,
    createCategoriesUserFollow,
    createPicture,
    createUser,
    deleteCategoriesPicturesAssociated,
    getPicutresByCategoriesUserFollow,
    postLogin,
    readCategoriesPictureAssociatedByPictureIds,
    readPictureByPictureIds,
    readPictureByUserId,
    readUser,
    updatePicture,
    updateUser,
    readPicturesByCategoryIds,
}