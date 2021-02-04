const Event = require("events").EventEmitter;
let evt = new Event();

process.nextTick(function(){
    evt.emit('vijayEvent', 'Welcome back to the training');
});

evt.addListener("vijayEvent", function(evt){
    console.log("Vijay Event Happened", evt);
});

console.log("hello from line 9 ");
console.log("hello from line 10 ");


// setTimeout(function(){
//     evt.emit('vijayEvent', 'message');
// }, 4000 );