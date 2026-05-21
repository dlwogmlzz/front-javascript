const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 입력한 username의 유효성 검사. username이 비어있으면 안됨.
function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
    // if(username === "") {
    //     alert("please write your name!");
    //     // loginInput창에 입력한 값(username)의 길이가 15이상이면 alert발동!!
    // } else if(username.length > 15) {
    //     alert("your name is too long.");
    // }
}

loginButton.addEventListener("click", onLoginBtnClick);