let data = process.argv;
console.log(data);
let username = process.argv[2];
let userpower = process.argv[3];

setTimeout(function(){
    console.log(username, userpower);
},2000);

// let username;

// if(data[2]){
//     username = data[2];
// }else{
//     username = 'Guest';
// }

// setTimeout(function(){
//     console.log(username);
// },5000)