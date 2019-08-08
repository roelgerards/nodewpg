var message = "3.14 is a great number but 42 it's the answer to life."
var pi = parseInt(message.slice(0,4),10)
var answerToLife = parseInt(message.slice(27),10)
var result = pi+answerToLife

console.log(`pi`, pi)
console.log(`answerToLife`, answerToLife)
console.log( result.toString() + ' is the result of adding pi and answerToLife together')

//3 is the integer return of 3.14 (integers = only whole numbers )