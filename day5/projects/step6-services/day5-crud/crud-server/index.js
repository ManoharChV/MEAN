const express = require("express");
const cors = require("cors");
let app = express();
app.use(cors());

let data = [{
    "sl": 1,
    "title": "Fatman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.450987,
    "releasedate": "1/26/2021",
    "poster": "assets/images/batman.jpg"
},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178,
    "releasedate": "1/27/2021",
    "poster": "assets/images/superman.jpg"
},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122.90,
    "releasedate": "1/27/2021",
    "poster": "assets/images/ironman.jpg"    
}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.64,
    "releasedate": "1/27/2021",
    "poster": "assets/images/phantom.jpg"
}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 451.34,
    "releasedate": "9/26/2021",
    "poster": "assets/images/spiderman.jpg"
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.34,
    "releasedate": "11/26/2021",
    "poster": "assets/images/wonderwoman.png"
}]
app.get("/", function(req, res){
    res.json(data);
})
app.listen(2020, "localhost", function(error){
    if(error){
        console.log("Error ",error);
    }else{
        console.log("server is now live on localhost : 2020");
    }
})