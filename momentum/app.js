// sayHello함수에 () nameOfPerson, age 라는 매개변수, arguments를 받아서 넘겨줄수 있다.
// function sayHello(nameOfPerson, age) {
//     console.log("Hello My name is " + nameOfPerson + " and I'm " + age);
// }
// console.log(nameOfPerson); // nameOfPerson은 sayHello함수 안에서만 사용가능한 지역변수이므로 에러가 뜬다.

// sayHello("Jaehee", 10);
// sayHello("Wonwoo", 20);
// sayHello("John", 40);

const me = "zz";
const days = [1, 2, false, true, null, undefined, "Monday", me];

const toBuy = ["burger", "sandwich", "milk", "cola", "bread"];
console.log(toBuy[4]);
console.log(toBuy);
toBuy[4] = "pizza";
console.log(toBuy);
toBuy.push("ice cream");
console.log(toBuy);

const player = {
    name: "Jaehee",
    sayHello: function(otherPersonsName) {
        console.log("Hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("Sangmin");
player.sayHello("Yeongmin");



function plus(a, b) {
    console.log(a + b);
}

plus();
plus(8, 52);

// function divide(c, d) {
//     console.log(c / d);
// }

// divide(100, 5);



