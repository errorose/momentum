// a + b
// a - b
// a / b
// a**b

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    times: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },
};

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.times(1, 2);
calculator.divide(1, 2);
calculator.power(1, 2);
