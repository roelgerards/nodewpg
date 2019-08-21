var numbers = [];

for(var number = 0, step = 1; number=number+step; step++){
    if (1000 >= step) {
    numbers.push(number);
    console.log(`${number}`)
    }
}

if ( (numbers.indexOf(number) == 5005000) > -1) {
    console.log("good job!")
} else {
    console ("something is wrong")
}

