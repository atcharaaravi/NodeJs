var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/nodemongo";

client.connect(dbUrl, function(err, db){
    if(err){
        throw err
    }
    console.log("Database created...")
    db.close();
})