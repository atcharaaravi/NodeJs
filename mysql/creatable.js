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
        var sql = "create table friends (name varchar(32),id int(8),location varchar(30))";
        connection.query(sql,function(err,success){
            if(err){
                throw err;
            }else {
                console.log("Table Created ....")
            }
        })
    }
})