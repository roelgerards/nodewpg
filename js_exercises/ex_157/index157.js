const game = [
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        sold: 25,
        console: "XBOX",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Gta V",
        price: 1449,
        sold: 30,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Mortal Kombat Xl",
        price: 1190,
        sold: 34,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Gta V",
        price: 1250,
        sold: 60,
        console: "XBOX",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Fifa 2017",
        price: 890,
        sold: 15,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Uncharted 4",
        price: 950,
        sold: 30,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Mortal Kombat Xl",
        price: 940,
        sold: 30,
        console: "XBOX",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Need For Speed",
        price: 790,
        sold: 10,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Lego Batman",
        price: 1000,
        sold: 18,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Fifa 17",
        price: 1290,
        sold: 12,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Resident Evil 7",
        price: 1390,
        sold: 10,
        console: "PS4",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },
    {
        name: "Dragon Ball XX",
        price: 1390,
        sold: 25,
        console: "XBOX",
        showDetail: function () { console.log(`\nname: ${this.name}\nprice: ${this.price}\nsold: ${this.sold}\nconsole: ${this.console}`) }
    },


    ];
const consoleType = "XBOX";

const byConsole = game.filter(function(game) {
    return game.console === consoleType;
    });

byConsole.forEach(function (game) {
game.showDetail()
});

