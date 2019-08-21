var tripExpenses = [500,1500,250];

var hotelFees = tripExpenses[0];
var tripFees = tripExpenses[1];
var mealsFees = tripExpenses[2];

var budget  = tripExpenses.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${hotelFees}, trip: ${tripFees}, meals: ${mealsFees}`);
console.log('Total trip budget: '+ budget)