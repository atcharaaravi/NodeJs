var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/";

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw err
    }
    console.log("Database instance created...")

    var database = db.db("nodemongo")

    var jsonobj = [{ "name": "Bala", "gender": "male", "location": "Chennai" },
                    { "name": "Narmu", "gender": "female", "location": "Chennai" },
                    { "name": "Hari", "gender": "male", "location": "Kerala" },
                    { "name": "Jayashree", "gender": "female", "location": "Chennai" },
                    { "name": "Pavi", "gender": "female", "location": "Chennai" }]

    database.collection("tutorial").insertMany(jsonobj, function (err, res) {
        if (err) {
            throw err
        }
        console.log("documents inserted...")
        db.close();
    })


})