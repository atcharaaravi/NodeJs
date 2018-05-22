var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/nodemongo";

client.connect(dbUrl, function(err, db){
    if(err){
        throw err
    }
    console.log("Database instance created...")

    var database = db.db("nodemongo")

    database.createCollection("tutorial",function(err, res){
        if(err){
            throw err
        }
        console.log("Collection created...")
        db.close();
    })

    
})