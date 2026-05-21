// const loginForm = document.getElementById("login-form");

// ↑위 코드를 같은 의미
// const loginForm = document.querySelector("#login-form");

// const loginInput = loginForm.quertSeletor("input");
// const loginButton = loginForm.querySelector("button");

// ↑위의 코드를 한번에 가능.
// html에서 querySeletor로 login-form id를 찾고 그안에 input태그를 찾음.
const loginInput = document.querySelector("#login-form input");
// html에서 querySeletor로 login-form id를 찾고 그안에 button태그를 찾음.
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    // button클릭시 input에 입력한 값 콘솔에 표시
    // 아무것도 입력안하고 클릭했을때, hello가 표시.
    console.dir("hello", loginInput.value);

    // user가 이름만 입력했을 때만 button을 클릭할 수 있도록 수정예정.
}

loginButton.addEventListener("click", onLoginBtnClick);