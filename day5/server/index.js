const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

//------------------------------------------
// middle ware configuration
let app = express();
app.use(cors());
app.use(bodyparser.json());
//------------------------------------------
// miscl
let handleError = function(err){
    console.log("Error", err)
}
//------------------------------------------
// DB Config
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let Hero = mongoose.model("Hero", new Schema({
    "id": ObjectId,
    "title": String,
    "city": String,
    "ticketprice": Number 
}));
mongoose.Promise = global.Promise;
let uri = "mongodb://127.0.0.1:27017/friendsdb";
mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology: true }).then(()=>{
    console.log("Database is now connected");
}).catch((error) => {
    handleError(error);
});
//------------------------------------------
// Rest configurations
// READ
app.get("/data", function(req, res){
    Hero.find((error, heros) => {
        if(error){
            handleError(error);
            res.end();
        }else{
            res.send(heros)
        }
    })
})
// CREATE
app.post("/data", function(req, res){
    console.log("recieved post data", req.body);
    let hero = new Hero( req.body );
    hero.save().then( (nhero) => { 
        res.send(nhero)
     } ).catch((error)=>{ 
        handleError(error);
        res.end();
    }); 
})
// BEFORE UPDATE
app.get("/data/:heroid", function(req, res){
    Hero.findById(req.params.heroid, (error, hero) => {
        if(error){
            handleError(error);
            res.end();
        }else{
            res.send(hero);
        }
    })
})

// UPDATE
app.post("/data/:id", function(req, res){
    Hero.findById(req.params.id, (error, hero) => {
        if(error){
            handleError(error);
            res.end();
        }else{
            hero.title = req.body.title;
            hero.city = req.body.city;
            hero.ticketprice = req.body.ticketprice;
            hero.save().then( udhero => res.send( udhero ));
            res.send({"savedhero" : hero });
        }
    })
})

// DELETE
app.delete("/delete/:id", function(req, res){
    Hero.findByIdAndDelete({ _id: req.params.id }, (error, delhero) => {
        if(error){
            handleError(error);
        }else{
            res.send({"deleted ": delhero })
        }
    })
})

//------------------------------------------
// web server configurations
app.listen(3030, "localhost", function(err){
    if(err){
        handleError(err);
    }else{
        console.log("server is now live on localhost : 3030 ")
    }
})
//------------------------------------------
