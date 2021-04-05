const _controllerTest = (req, res, next) => {
    console.log(req.body);
    console.log(req.files);
}

module.exports = _controllerTest;