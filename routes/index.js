var express = require('express');
var router = express.Router();
var query = require('../database/mysql')
var cache = require('memory-cache');
var userService=require('../service/UserService')
/* GET home page. */
router.get('/', function (req, res, next) {
    var sql = "Select count(id) from t_user"
    if (cache.get("count") == null) {
        query.query(sql, [], function (results, fields) {
            cache.put("cache", JSON.stringify(results),30,function () {
                cache.del("cache");
            });
            res.render('index', {title: JSON.stringify(results)});
        })
    } else {
        //res.render("index",{content:cache.get("count")})
        res.respond(cache.get("count"));
    }
});
router.get('/hello',function (req,res,next) {
    var sql = "Select count(id) from t_user";
    query.query(sql, [], function (results, fields) {
        res.json(results);
    })

});

router.get('/hello2',function (req,res,next) {
    let result= userService.findUserNumbers;
    console.log("result "+JSON.stringify( result))
    res.json(userService.countUser());
})
module.exports = router;
