var user = {username: 'batman',password: 'Alfred1960ROCKS'};

var firstLetter = user.username.charAt(0).toUpperCase();
var capitalizedUser = firstLetter + user.username.slice(1, 6);

const replacedPassword = user.password.slice(0, 6) + ' ' + user.password.slice(10, 15);

console.log(`First Output -> username: ${user.username}) and password:  ${user.password}`);
console.log(`Second Output -> new user: ${capitalizedUser} and new pass:  ${replacedPassword}`);
