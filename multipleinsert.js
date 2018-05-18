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
        var sql = "insert into friends (name,id,location) values ?";
        var records = [
            ['narmu',2,'chennai'],
            ['vidhya',3,'bangalore'],
            ['jayashree',4,'chennai'],
            ['pavi',5,'chennai'],
            ['shilpa',6,'coimbatore'],
        ]
        connection.query(sql,[records],function(err,success){
            if(err){
                throw err;
            }else {
                console.log("5 rows inserted ....")
            }
        })
    }
})