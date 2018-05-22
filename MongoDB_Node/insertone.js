var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/";

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw err
    }
    console.log("Database instance created...")

    var database = db.db("nodemongo")

    var jsonobj = {"name":"Atcharaa","gender":"female","location":"Chennai"}

    database.collection("tutorial").insertOne(jsonobj, function (err, res) {
        if (err) {
            throw err
        }
        console.log("1 document inserted...")
        db.close();
    })


})