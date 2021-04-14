const _controllerTest = (req, res, next) => {
    console.log('INFO: _controllerTest ----------------------------------------\n');
    console.log(`req ===================================================\n`); 
    console.log(req);

    console.log(`req.body ===================================================\n`); 
    console.log(req.body);

    console.log(`req.files ===================================================\n`); 
    console.log(req.files);

    console.log(`NEXT ===========================================\n`);
    res.sendStatus(200);
    next();
}

module.exports = _controllerTest;