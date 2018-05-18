var mysqldb = require("mysql")

var connection = mysqldb.createConnection({
    host:"localhost",
    user:"root",
    password:""
})

connection.connect(function(err){
    if(err){
        throw err;
    }else {
        console.log("connected to the database")
        connection.query("create database fromnode",function(err,success){
            if(err){
                throw err;
            }else{
                console.log("Database Created")
            }
        })
    }
})