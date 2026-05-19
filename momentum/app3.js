// const age = 100;
// // 한국 나이 계산.
// function calculateKrAge(ageOfForeigner) {
//     // return을 해줘야 calculateKrAge함수의 결과값이 ageOfForeigner + 2가 된다.
//     // return ageOfForeigner + 2;
//     ageOfForeigner + 2; // return이 없으면 undefined가 된다.
//     return "hello";
// }

// const krAge = calculateKrAge(90);
// console.log(krAge);

// prompt는 질문을 띄워서 사용자로부터 입력을 받을 수 있게 해주는 함수이다. 
// 입력받은 값은 문자열로 반환된다.

const age = parseInt( prompt("How old are you?") );

// variable type확인하기(typeof 변수명)
// 문자열을 입력받고 그 값을 숫자로 바꿔주는 함수는 parseInt()이다.
// console.log(typeof "15", typeof parseInt("15"));

// isNaN()은 Not a Number의 약자로, 숫자가 아닌 값을 입력받았는지 확인하는 함수이다. 
// 숫자가 아닌 값을 입력받으면 true를 반환하고, 숫자를 입력받으면 false를 반환한다.
// console.log(isNaN(age));
// console.log(age, parseInt(age));

if (isNaN(age) || age < 0) { // boolean(true or false)값이 들어가야 한다.
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink!");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise!");
} else if(age === 100) {
    console.log("Wow you are wise.");
} else if(age > 80) {
    console.log("You can do whatever you want!");
} 




