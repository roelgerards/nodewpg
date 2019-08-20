var numbers = [];

for(let index = 1;index <= 1000;numbers.push(index),index++);


let output = numbers.map(function(number, index) {
    console.log(`index: ${index}, original number: ${number}, incremented value: ${number + 10}`);
});