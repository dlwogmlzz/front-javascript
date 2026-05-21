const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // string만 포함된 변수는 대문자로 표기하는 관습이있음.

function onLoginSubmit(yap_event) {
    // input창에 입력하고 button클릭하면 input과 button이 사라지도록
    yap_event.preventDefault(); // 기본동작이 실행되지 않도록하고
    loginForm.classList.add(HIDDEN_CLASSNAME);  // 클래스 hidden을 넣어서 display none이 되게 하고 form을 숨김.

    const username = loginInput.value; // 유저의 이름을 변수로 저장함.
    // id가 greeting인 태그에 innerText로 입력한 값을 넣어줌.
    // greeting.innerText = "Hello " + username;
    
    // 규칙1. 변수와 string을 결합하고 싶을때.
    // 규칙2. 백틱(`)기호, Hello ${username}, ${}로 시작해야 된다.
    greeting.innerText = `Hello ${username}`;   // 백틱(``)을 이용한 방법
    // 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
