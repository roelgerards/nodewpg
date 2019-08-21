var mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan',
];

if (mutants.indexOf('Logan') > -1 && mutants.indexOf('Professor X') > -1) {
    console.log("We love x-men")
} else {
    console.log("X-Men sucks")
}


if (mutants.indexOf('Gambit') == -1) {
    console.log("X-Men sucks")
} else {
    console.log("We love x-men")}