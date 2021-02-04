const fs = require('fs');
/*
fs.writeFileSync("temp.txt","Welcome to your life","utf-8");
console.log( fs.existsSync("temp.txt") );
fs.appendFileSync("temp.txt","\nthere's no turning back ");
console.log("writing file done...");
*/

// let textData = fs.readFileSync("temp.txt")+"";
// let textData = fs.readFileSync("temp.txt").toString();
let textData = fs.readFileSync("temp.txt",{ encoding : "utf-8" });
console.log(textData);

// create a folder by name data
// create a file in that data folder by name joke.txt
// write a joke in the file
// read the joke and convert it to uppercase..
// finally delete the data folder

