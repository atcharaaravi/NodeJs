var http = require("http")
var file = require("fs")

var server = http.createServer(fileServer).listen(8888)

function fileServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with FS Module")
    
    file.readFile("india.html",function(err,data){
        if(err){
            throw err;
        }
        res.write("<br>")
        res.write(data);

        file.writeFile("bharath.html",data,function(err){
            console.log(err)
        })

        res.end();
    })
  
    
}

