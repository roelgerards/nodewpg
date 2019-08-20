var grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var grades0 = grades[0];
var grades2 = grades[2];
var grades4 = grades[4];
var grades9 = grades[9];
     
var output =  result(grades0,grades2,grades4,grades9);

function result(grades0,grades2,grades4,grades9){
    return (grades0 + grades2 + grades4 + grades9);
}

console.log(output);