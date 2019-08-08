var firstName = "Roel"
var lastName = "Gerards"

charsDiff = firstName.length - lastName.length;
result = firstName.length > lastName.length;

console.log(`My first name is ${firstName} and it is ${firstName.length} characters long. \n
My last name is ${lastName} and it is ${lastName.length} characters long. \n
The character difference between my first name and last name is ${Math.abs(charsDiff)}. \n
My first name is longer than my last name: ${result}`);