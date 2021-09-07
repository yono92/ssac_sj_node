var express = require('express');
var router = express.Router();

const usersRouter = require(res,req);
const postsRouter = require(res,req);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/",(req,res,next)=>{
  res.status(404).json({
    error:"page not found!!",
  });
});
router.use("/posts",postsRouter);
router.use("/users",usersRouter);

// METHOD : GET
// URL : /users
// RESPONSE : {
//    username:'lee'
//}

// METHOD: POST
// URL : /users
// RESPONSE:{
//   content:"유저 생성 완료"
// }

// METHOD: DELETE
// URL : /users
// RESPONSE:{
//   content:"유저 생성 완료"
// }


module.exports = router;
