function sayHello(nameOfPerson, ageOfPerson) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + ageOfPerson);
}

sayHello("kuromi", 10);
sayHello("pikachu", 20);
sayHello("kitty", 30);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(60, 8);

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

divide(98, 20);

console.log("-----");

const player = {
    name: "kuromi",
    sayHello: function (otherPersonName) {
        console.log("Hello! " + otherPersonName);
    },
};

console.log(player.name);
player.sayHello("yeseul");
player.sayHello("yoon");
