// document는 나의 웹페이지를 뜻한다. 
// document.title은 웹페이지의 제목을 뜻한다.
// html title보다 우선순위가 높다.
// document.title = "Hello! From JS";

// const title = document.getElementById("something");
// console.dir(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// querySelector는 element를 css방식으로 검색할 수 있다.
// .hello h1은 class내부에 있는 h1을 하나만 가지고 올수 있다.
// const title = document.querySelector(".hello h1");
// const title = document.querySelector(".hello h1:first-child");

// .hello h1의 자식인 h1을 가지고 올수 있다. 하지만 .hello h1:first-child h1은 .hello h1의 첫번째 자식인 h1이 없기 때문에 null이 된다.
// const title = document.querySelector(".hello h1:first-child h1");
// const title = document.querySelector("div.hello h1:first-child h1");

// element의 내부를 보고 싶다면, console.dir()을 사용하면 된다.
// console.dir(title);


// id로 찾기(둘다 똑같음..)
// const title = document.getElementById("hello");
// form태그가 있으면 form태그로 찾기
// const title = document.querySelector("#hello form");
const title = document.querySelector(".hello h1");

title.innerText = "changed!";
// querySelectorAll - .hello h1은 class내부에 있는 h1을 하나만 가지고 올수 있다.
// const title = document.querySelectorAll(".hello h1");



// div h1은 div내부에 있는 h1을 가지고 올수 있다.
// const title = document.querySelector("div h1");
// getElementsByClassName("hello");
console.log(title);
