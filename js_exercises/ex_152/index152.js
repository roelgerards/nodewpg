var user = {
    username: null,
    password: null,
    greet: function(){
        if(this.username){
            console.log(`Hello I'm ${this.username}`)
        } else {
            console.log(`Please assign a username value`)
        }

    },
    updatePassword:function(pass){
        this.password = pass;
    },
    updateUsername:function(name){
        this.username = name;

    },
};

user.updatePassword ("test123");
user.updateUsername("dude");
console.log(`${user.greet()}`);
console.log(user.password);