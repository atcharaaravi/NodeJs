var mysqldb = require("mysql")

var connection = mysqldb.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fromnode"
})

connection.connect(function(err){
    if(err){
        throw err;
    }else {
        console.log("connected to the database")
       /* connection.query("create database fromnode",function(err,success){
            if(err){
                throw err;
            }else{
                console.log("Database Created")
            }
        })*/
        var sql = "insert into friends (name,id,location) values('atcharaa',1,'Chennai')";
        connection.query(sql,function(err,success){
            if(err){
                throw err;
            }else {
                console.log("1 row inserted ....")
            }
        })
    }
})