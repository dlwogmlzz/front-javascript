// button클릭 기능을 지우고, form의 sumit event가 발생한 것을 파악.
// form을 submit 할때, 입력값을 받아냄.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


// 방금 일어난 행동(이벤트)에 대한 정보를 argument에 넣음.
// submit event컨트롤
// 1. submit event가 발생할 때 JS는 onLoginSubmit function 호출한다.
// 2. 이때 event object를 argument로 주고 있음.
// 3. preventDefault함수를 이용해서 기본 동작이 실행되는것을 막아줌.
function onLoginSubmit(yap_event) { // argument를 받음.

    // preventDefault함수는 어떤 event의 기본 행동이든지 발생되지 않도록 막음.
    yap_event.preventDefault();
    // console.log(yap_event);   
    console.log(loginInput.value);   
}

// submit event감지..
// addEventListener를 사용할때는 함수이름만 적어준다.(onLoginSubmit)
loginForm.addEventListener("submit", onLoginSubmit);