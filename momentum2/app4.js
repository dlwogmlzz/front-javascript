const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(yap_event) {
    yap_event.preventDefault();
    console.log(loginInput.value);   
}

function handleLinkClick(yap_event) {
    yap_event.preventDefault();
    console.dir(yap_event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
