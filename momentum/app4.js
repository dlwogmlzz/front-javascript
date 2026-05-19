// document는 나의 웹페이지를 뜻한다. 
// document.title은 웹페이지의 제목을 뜻한다.
// html title보다 우선순위가 높다.
// document.title = "Hello! From JS";

const title = document.getElementById("title");
// console.dir(title);

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);
