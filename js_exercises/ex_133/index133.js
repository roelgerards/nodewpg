var mutants = 
[
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



for ( var index = 0; ((mutants[index]  && (  mutants.length - 1 >= index) !== 'Magneto')); index++ ) {
    
    console.log(mutants[index]);
} 

console.log('-------------')

mutants.splice(mutants.indexOf('Magneto'), 1);

mutants.forEach(function(withoutMagn) {
    console.log(withoutMagn.toUpperCase());
});