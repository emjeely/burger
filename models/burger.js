var orm = require("../config/orm.js");

var burger = {
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne:function(cols,val,cb){
        orm.insertOne("burgers",cols,val,function(res){
            cb(res);
        });
    },
    updateOne:function(id,cb){
        orm.updateOne("burgers","devoured",1,"id",id,function(res){
            cb(res);
        });
    },
    delete:function(id,cb){
        orm.delete("burgers","id",id,function(res){
            cb(res);
        });
    }
};

module.exports = burger;