var playerName = 'Patrick Laine is lame'
var teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins"
var message = "Winnipeg is the best Canadian city, Go Winnipeg"

var template = `${playerName.slice(0,13).toUpperCase()} ${playerName.slice(14,16)} ${message.slice(12,20)} ${teams.slice(46,47).toUpperCase()}${teams.slice(47,50)} player${message.slice(34,38)} Jets!!`;

console.log(template);