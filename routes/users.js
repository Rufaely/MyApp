var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
console.log("1"+req.query.k);
 // res.send('respond with a resource');
res.render("users");
});

router.post('/', function(req, res, next) {
console.log("2"+req.name);
 // res.send('respond with a resource');
 console.log(req.body);
res.render("users");
});

module.exports = router;
