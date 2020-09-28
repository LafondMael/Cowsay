let name = "Mael Lafond";
let from = "La Loupe";
var cowsay = require("cowsay");

const myInfos = () => {
    console.log(cowsay.say({
        text : `Hi my name is ${name}, I'm from ${from} Campus`,
        e : "oO",
    }))};

module.exports = myInfos;