// 1. 유저가 처음 앱을 열면 form과 h1은 CSS에 있는 hidden이라는 class때문에, 숨겨져 있다.
// 2. 그 다음 자바스크립트가 USERNAME_KEY를 가지고 local storage를 확인함.
// 3. 하지만 대부분의 경우에는 앱을 처음 실행했을 때, key랑 value가 없다.
// 4. 즉 savedUsername값이 null이다.
// 5. if (savedUsername === null) { 이 조건이 참이면 form에서 HIDDEN_CLASSNAME을 지워지면
//    form이 표시되고 그다음 addEventListener가 form이 submit이 되기를 기다리고 있고,
//    submit이 발생하면 onLoginSubmit 함수를 호출한다.
// 6. onLoginSubmit 이 함수는 자바스크립트가 호출함.    

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// String을 반복적으로 사용하는 경우, 변수로 고정시켜줌.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(yap_event) {
    yap_event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

// localStorage에 username이 null을 반환.
// 만약 savedUsername값이 null이라면 form의 hidden class명을 지움.
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();
}
