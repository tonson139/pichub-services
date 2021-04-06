const _controllerTest = (req, res, next) => {
    console.log('_controllerTEst');
    next();
    console.log('passed conter');
}

module.exports = _controllerTest;