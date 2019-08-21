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
mutants.forEach(function(mutants, index) {
   
    var mutant = mutants.toString();
    if ((mutant === 'Iceman') || (mutant === 'Logan') || (mutant === 'Phoenix'))
    {
        console.log(mutant);
    }
});