var express = require('express');
var router = express.Router();

var burger = require ("../models/burger.js");

router.get('/', function(req, res){
    burger.all(function(data){
        var handleOb = {
            burgers: data
        };
        console.log(handleOb)
        res.render("index", handleOb);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, false], function(result){
        res.json({ id: result.insertID});
        console.log("Burger was added")
    });
});

router.put("/api/burgers/:id", function (req, res){
    var condition = `id = ${req.params.id}`;

    burger.add(condition, function(resultimationious){
        if (resultimationious.changedRows == 0) {
            console.log("Burger does not exist");
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;