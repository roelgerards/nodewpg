var a = 1;
var b = 0;
var temp = 1;
var step = 1;


do{

    temp = a;
    a = a + b;
    b = temp;
    step++;

    console.log (b)

}
while (step < 11 ) 