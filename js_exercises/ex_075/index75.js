var a = 1;
var b = 0;
var temp = 1;
var step = 1;


while (step < 11 ) {

    temp = a;
    a = a + b;
    b = temp;
    step++;

    console.log (b)

}