var femaleStudents = 
['Allie','Annie','Ashley','Bebe','Wendy']

var maleStudents = 
['Eric','Stan','Kyle','Kenny','Butters']

var students = 
[   femaleStudents[0],
    femaleStudents[1],
    femaleStudents[2],
    femaleStudents[3],
    femaleStudents[4],
    maleStudents[0],
    maleStudents[1],
    maleStudents[2],
    maleStudents[3],
    maleStudents[4]
];


console.log('Students are: '+students.sort(), '\n');

console.log(`The female students are : ${femaleStudents[0]}, ${femaleStudents[1]}, ${femaleStudents[2]}, ${femaleStudents[3]}, ${femaleStudents[4]}`,'\n')


let step = 0; 
while (maleStudents.length - 1 >= step) {
    console.log('male: '+maleStudents[step]);
    step++;
}

for (step =0 ;students.length - 1 >= step ; step++) {
    console.log(students[step]);
} 

