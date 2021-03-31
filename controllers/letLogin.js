const postLogin = require("../models/postLogin");
const { getToken } = require("../jwtHandler");
const md5Encode = require("md5");

const letLogin = async (req, res, next) => {
  const { username, password } = req.body
  //encode password
  const passwordEncode = md5Encode(password);
  const result = await postLogin(username, passwordEncode);

  if(result){
    res.status(201).json({
      result: "success",
      username: username,
      password: passwordEncode,
    });
  } else {
    res.status(400).json({
      result: "failed",
      data: ""
    })
  };
}
/*   postLogin(username, passwordEncode, ( err, rows) => {
    if (rows.length > 0){
      const _username = rows[0].username;
      const _id = rows[0].id;
      const token = getToken({ id: _id, username: _username})

      const Result = {
        result: "success",
        id: _id.toString(),
        token: token
      };
      console.log(JSON.stringify(Result));
      res.json(Result);
    } else {
      const Result = {
        result: "failed",
        token: ""
      };
      console.log(JSON.stringify(Result));
      res.json(Result);
    }
  })
} */

module.exports = letLogin;
