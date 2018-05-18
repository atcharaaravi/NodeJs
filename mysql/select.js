var mysqldb = require("mysql")
var http = require("http")

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
        var sql = "select * from friends";
        connection.query(sql,function(err,result,success){
            if(err){
                throw err;
            }else {
               data = JSON.stringify(result)
                console.log(data)
            }
        })
    }
})

var myserver = http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("JSON data from server");
    response.write("<br>");
    response.write(data)
    response.end();
});
myserver.listen(8888);