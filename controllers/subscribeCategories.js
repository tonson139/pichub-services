const createCategoriesUserFollow = require('../models/createCategoriesUserFollow');

const subscribeCategories = async (req, res, next) => {
    result = await createCategoriesUserFollow(req.body.user_id, req.body.subscribed_categories);
    if(result)
        res.status(201).json({"result": true});
    next();
};

module.exports = subscribeCategories;