let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res){
    // console.log(req.url);
    if(req.url === "/"){
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(fs.readFileSync('./public/index.html')+"");
        res.end();
    }else{
    fs.readFile('./public'+req.url, function(error, data){
        if(error){
            res.writeHead(404, { 'content-type': 'text/html'});
            res.write("<h1>Requested Page was not found | 404 </h1>")
            res.end();
        }else{
            res.writeHead(200, { 'content-type': 'text/html'});
            res.write(data+"");
            res.end();
        }
    })
}
});

let port = 2020;
let host = "localhost";
let handlerError = function(error){
    if(error){
        console.log(error)
    }else{
        console.log("server is now live on "+host+" : "+port);
    }
}
server.listen(port,host,handlerError);
