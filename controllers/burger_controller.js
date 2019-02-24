var express=require("express");
var router=express.Router();
var burger=require("../models/burger.js");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var ob={
            burger:data
        };
        console.log(ob);
        res.render("index",ob);
    });
});

router.post("/api/burger",function(req,res){
    burger.insertOne([
        "burger_name"
    ],[
        req.body.burger
    ],function(result){
        res.json({id:result.insertId});
    });
});

router.put("/api/burger/:id",function(req,res){
    var id=parseInt(req.params.id);
    burger.updateOne(id,function(data){
       console.log("updated");
       return res.json(data);
    });
});

router.delete("/api/burger/:id",function(req,res){
    var id=parseInt(req.params.id);
    burger.delete(id,function(data){

        console.log("deleted");
        return res.json(data);
    })
})

module.exports = router;