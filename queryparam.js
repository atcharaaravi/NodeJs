var http = require("http")
var url = require("url")
var os = require("os")
var server = http.createServer(queryParamServer).listen(8888)

function queryParamServer(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("I am working with url query param")

    var myquery = url.parse(req.url,true).query;
    var querytext = myquery.name;
    var querytext1 = myquery.loc;

    console.log(myquery.host)
    console.log(myquery.path)
    console.log(myquery.search)
    //console.log(os.hostName())
    res.write("<br>");
    res.write(querytext+" "+querytext1);
    res.end()
}