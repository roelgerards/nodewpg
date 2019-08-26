var artithmetic = {
    add:        function(num2, num10){
        return num2 + num10
    },
    substract:  function(num10, num5){
        return num10 + num5
    },
    multiply:   function(num3, num100){
        return num3 * num100
    },
    divide:     function(num40, num2){
        return num40 / num2
    },
    remainder:  function(num20, num2){
        return num20 % num2
    },
};

console.log(artithmetic.add(2,10));
console.log(artithmetic.substract(10,5));
console.log(artithmetic.multiply(3,100));
console.log(artithmetic.divide(40,2));
console.log(artithmetic.remainder(20,2));
