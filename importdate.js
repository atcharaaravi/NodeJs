var httpVariable = require("http")
var currentDate = require("./datelibrary")
var myserver = httpVariable.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with Date Library");
    res.write("<br>")
    var cd=currentDate.myDate();
    res.write(cd);
    res.end();
})
myserver.listen(8888)