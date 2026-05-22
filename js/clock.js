const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval - 매번(5초후) 무슨 일이 일어나게 하고 싶을때 사용.
setInterval(sayHello, 5000);