const data = [42, true, function() {return 'The meaning of life is: '}];

const output = data[2];

if (data[1]){
    console.log(output() + data[0]);
}

