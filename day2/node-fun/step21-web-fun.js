let http = require("http");
let herolist = ['Batman', 'Joker', 'Superman', 'Aquaman', 'Flash', 'Cyborg', 'Wonder Woman']

let htmlherolist = '';
herolist.forEach(function(v){
    htmlherolist += "<li>"+v+"</li>";
});

let server = http.createServer(function(request, response){
    // console.log(request);
    response.writeHead(200, {
        "content-type" : "text/html"
    });
    response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome to your life</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni, ipsum fugit excepturi fugiat unde, porro assumenda culpa quisquam aliquam, nisi enim ut eius. Ipsa nesciunt id labore fugit dicta!
        </p>
        <ul>{{ herolist }}</ul>
    </body>
    </html>
        `.replace('{{ herolist }}', htmlherolist));
    response.end();
});
server.listen(1010, "localhost", function(error){
    if(error){
        console.log("Error", error);
    }else{
        console.log("Server is now live on localhost:1010");
    }
});