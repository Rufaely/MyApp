var express = require('express');
var router = express.Router();
var fs=require("fs");
var path=require("path");
/* GET home page. */

router.get('/', function(req, res, next) {
console.log("oerrrrrrrrrr");
var table="";
fs.readFile(path.join("./inventors.json"),"utf-8",function(err,data){
//console.log(err);
//console.log(JSON.parse(data));

data=JSON.parse(data);

 console.log("urllll"+req.url);
  res.render('index', { data: data,title:"Express" });
 
});

 
});

module.exports = router;
