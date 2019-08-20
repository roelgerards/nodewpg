const firstPerson = ['Sherlock', 'Holmes', '221B Baker Street', 60];
const secondPerson = ['Sherlock', 'Holmes', '221B Baker Street', 60]
//const secondPerson = ['Boris', 'Johnson', '10 Downing Street ', 55];


function extract() {

    const resultFirstPerson = firstPerson.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    const resultSecondPerson = secondPerson.reduce(function (accumulator2, currentValue2) {
        return accumulator2 + currentValue2;
    });

    if (resultFirstPerson === resultSecondPerson) {
        console.log('They are the same person.')
    } else {
        console.log('They are not the same person.')
    }

}

extract()