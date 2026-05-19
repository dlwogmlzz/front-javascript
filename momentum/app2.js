// const player = {
//     name: "Jaehee",
//     age: 98,
// };

// console.log(player, console);
// console.log(player.name = "zz");
// console.log(player);
// player.good = "bad";
// console.log(player);

// function plus(pao, pan) {
//     console.log(pao + pan);
// };

// plus(10, 10);

// function은 내부에서 외부로 실행된다.
// function minusFive(potato) {    // argument를 하나만 선언하면 하나만 동작.
//     console.log(potato - 5);
// }

// minusFive(2, 2, 3, 2, 1)

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    minus: function(a, b) {
        return a - b;
    },

    times: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    },

    power: function(a, b) {
        return a ** b;
    }
}

const plusResult = calculator.add(10, 90);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
