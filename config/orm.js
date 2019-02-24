var connection = require("./connection.js");
var orm={
    selectAll:function(table,cb){
        var queryString="select * from ??";
        connection.query(queryString,[table],function(err,data){
           if(err) throw err; 
         //   console.log(data);
           cb(data);
        });
    },
    insertOne:function(table,col,value,cb){
       var queryString="insert into ?? (??) values(?)";
       connection.query(queryString,[table,col,value],function(err,data){
           if(err) throw err;
           console.log("row inserted");
           cb(data);
       })
    },
    updateOne:function(table,col,val,col1,id,cb){
       var queryString="update ?? set ?? =? where ?? = ?";
       connection.query(queryString,[table,col,val,col1,id],function(err,data){
        if(err) throw err;
        console.log("row updated");
        cb(data);
       })
    },
    delete:function(table,col,val,cb){
       var queryString="delete from ?? where ?? = ?";
       connection.query(queryString,[table,col,val],function(err,data){
          if(err) throw err;
         console.log("row deleted");
         cb(data);
       })
    }
};

module.exports = orm;