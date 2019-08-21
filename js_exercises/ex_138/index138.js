var mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

var heart = mutants.map(function(mutant) {
    if (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
        mutant = ' <3 ' + mutant; 
    } 
    return mutant; 
})

console.log(mutants);
console.log(heart);
