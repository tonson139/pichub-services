/**
 * @description     - user create a "post" with "picture" and "picture detail". This function save "picture detail" to storage
 * @routes          - [POST] /post
 */

const createPostResponse = (req, res, next) => {
    res.status(201).json({
        results: true,
        pictureId: req.body.picture.insertId,
        numberofCategoriesInsert: req.body.result.affectedRows,
        user_id: req.body.user_id
    });
}

module.exports = createPostResponse;