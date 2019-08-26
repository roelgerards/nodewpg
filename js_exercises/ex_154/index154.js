var player = {
    name:   null,
    energy: 100,
    lives:  3,
    
    loseEnergy: function(damage){
        this.energy -= damage;
        if (0 >= this.energy) {
            this.energy = 100;
            this.lives --;
        }
    },
    recoverEnergy: function(energyUp){
        this.energy += energyUp
    },
    loseLife: function(){
        if (0 >= this.lives)
        this.lives --;
    },
    recoverLife: function(){
        if(this.lives >= 99) {
            this.lives = 99;
        } else {
        this.lives ++;
        }
    },
};

player.name = "Player One";//1

console.log("\nPlayer Log\n----------")
player.loseLife();//2
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(10);//3
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(5);//4
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(15);//5
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(20);//6
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.recoverEnergy(10);//7
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(30);//8
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseEnergy(40);//9
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.loseLife();//10
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.recoverLife();//11
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);

player.recoverLife();//12
console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`);



