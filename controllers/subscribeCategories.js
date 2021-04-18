/**
 * @description     - For user to subscribe to categories in register process
 * @routes          - [POST] /categories  
 */

const { createCategoriesUserFollow } = require('../models');

const subscribeCategories = async (req, res, next) => {
    try{
        console.info('INFO: subscribeCategories');

        // insert categories that user subscribe to tbl_categoriesuserfollow 
        insertResult = await createCategoriesUserFollow(req.body.user_id, req.body.subscribed_categories.split(',').slice(0,-1));
        if(insertResult)
            res.status(201).json({
                result: true,
                numberofCategoriesSubscribe: insertResult.affectedRows
            });
    } catch (error) {
        next(error);
    }
};

module.exports = subscribeCategories;