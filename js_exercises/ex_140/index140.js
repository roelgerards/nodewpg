 var mutants = 
[
    `Professor X`,
    `Cyclops`,
    `Iceman`,
    `Angel`,
    `Magneto`,
    `Beast`,
    `Phoenix`,
    `Logan`,
    `Gambit`,
];

 var removedMut = mutants.filter(function(mutants) {
    if ((mutants !=='Magneto') && (mutants !== 'Iceman') && (mutants !== 'Gambit')) {
        return true;
    } else { 
        return false;
    }
});

console.log(`removed ones: ${removedMut}`);
console.log(`the originale mutantos:  ${mutants}`) // how's my spanish?

