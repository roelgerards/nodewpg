let number = 0;
let step = 1;

while (1000 >= step) {
    number=number+step;
    step = step + 2;

    if (step < 1001) {
        console.log(number);
    }

}