function validateUser(username, password) {


    switch (username, password) {
        case (username === 'nacho' && password === 'Nerd1979'):
                console.log(`Welcome ${username}, nice to see you again`);
        break;
        case (username === 'pedro' && password === 'Batman0217'):
                console.log(`Welcome ${username}, nice to see you again`);
        break;
        case (username === 'marta' && password === 'Mother2312'):
                console.log(`Welcome ${username}, nice to see you again`);
        break;
        default:
                console.log('Please input valid credentials');
    }
    
    

};


validateUser('pedro','Batman0217');