let title = "Superman";
let firstname = "Clark";
let lastname = "Kent";

let fullname = function(){
    return firstname+" "+lastname;
};

/*
module.exports.herotitle = title;
module.exports.herofname = firstname;
*/

module.exports = {
    herotitle : title,
    herofname : firstname,
    herolname : lastname,
    fullname : fullname
}
