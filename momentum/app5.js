// const title = document.querySelector(".hello:first-child h1");
const title = document.querySelector("div.hello:first-child h1");

// console.dir(title);
// console.log(title);



function handleTitleClick() {
    title.style.color = "green";
    console.log("addEventListener is working!");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here!";
    console.log("Mouse on the title!");
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
    console.log("Mouse left the title!");
}




// 함수를 바로 실행하려면 그냥 handleTitleClick()라고 하면 된다. 
// 하지만, event listener에서는 handleTitleClick()라고 하면 안된다. 왜냐하면, event listener는 클릭이 되었을 때 함수를 실행하기 때문이다. 만약, handleTitleClick()라고 하면, 
// 클릭이 되지 않아도 함수가 바로 실행되어 버린다.  
// event listener(Click을 했을때, handleTitleClick 함수를 실행해라.)
// handleTitleClick() 이건 안됨. 이러면 클릭 이벤트가 발생하지 않고, 바로 실행된 상태로 화면에 표시됨.
// Javascript가 대신에 handleTitleClick 함수를 실행해줄 것이다.
// HTML페이지에서 element를 찾아오고, 그 element에 event listener를 추가하고, 이벤트가 발생시킴.
title.addEventListener("click", handleTitleClick);
// mouse로 title갖다 댔을때.
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
