// const h1 = document.querySelector(".hello:first-child h1");
const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);
// console.log(h1);



function handleTitleClick() {
    h1.style.color = "green";
    console.log("addEventListener && onClick is working!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
    console.log("Mouse on the title!");
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
    console.log("Mouse left the title!");
}


function handleWindowResize() {
    // document.div, document.h1은 존재하지 않는다.
    // document는 html문서 전체를 뜻하기 때문에, document.body로 해야 한다. 
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOD!!");
}



// 함수를 바로 실행하려면 그냥 handleTitleClick()라고 하면 된다. 
// 하지만, event listener에서는 handleTitleClick()라고 하면 안된다. 왜냐하면, event listener는 클릭이 되었을 때 함수를 실행하기 때문이다. 만약, handleTitleClick()라고 하면, 
// 클릭이 되지 않아도 함수가 바로 실행되어 버린다.  
// event listener(Click을 했을때, handleTitleClick 함수를 실행해라.)
// handleTitleClick() 이건 안됨. 이러면 클릭 이벤트가 발생하지 않고, 바로 실행된 상태로 화면에 표시됨.
// Javascript가 대신에 handleTitleClick 함수를 실행해줄 것이다.
// HTML페이지에서 element를 찾아오고, 그 element에 event listener를 추가하고, 이벤트가 발생시킴.
h1.addEventListener("click", handleTitleClick);

// 이 방법도 가능하지만, addEventListener가 더 좋다. 
// 왜냐하면, addEventListener는 여러개의 이벤트를 추가할 수 있지만, 
// onclick은 하나의 이벤트만 추가할 수 있기 때문이다. (onClick안됨.)
// h1.onclick = handleTitleClick; 

// mouse로 h1갖다 댔을때.
h1.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;

h1.addEventListener("mouseleave", handleMouseLeave);
// h1.onmouseleave = handleMouseLeave;


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

