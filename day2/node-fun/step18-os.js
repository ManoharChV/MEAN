const os = require('os');
console.log( os.arch() );
console.log(" Total ", os.totalmem() / 1024 / 1024 / 1024 , "TB");
console.log( os.cpus() );
console.log( os.platform() );
console.log( os.userInfo() );