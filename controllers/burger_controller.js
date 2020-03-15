var express = require('express');
var router = express.Router();

var burger = require ("../models/burger.js");

router.get('/', function(req, res){
    burger.all(function(data){
        var handleOb = {
            burgers : data
        };
        res.render("index", handleOb);
    });
});

router.post("/api/burger", function(req, res){
    burger.insert(["name", "devoured"], [req.body.name, false], function(result){
        res.json({ id: result.insertID});
    });
});

module.exports = router;