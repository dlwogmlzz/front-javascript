// HTML에서 id가 todo-form인 form태그를 찾는다.
const toDoForm = document.getElementById("todo-form");
// 1. toDpInput을 전체HTML document에서 찾아볼 수 있다.
// or toDoInput을 toDoForm안에서만 찾아볼 수도 있다.
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// todo를 만드는 작업 함수..
function paintToDo(newTodo) { // newTodo인자 넣음.
    // console.log("I will paint", newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");

    // li를 span으로 자식으로 만듦.
    li.appendChild(span);
    span.innerText = newTodo;
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(yap_event) {
    // form안에 input창 새로고침방지.
    yap_event.preventDefault ();
    // input에서 입력한 값을 콘솔로 확인..
    // console.log(toDoInput.value);

    // 1. input value를 비우기 전에 그 값을 저장...
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    // 2. input에서 입력한 값을 입력하고 Enter하면 input창을 빈칸으로
    // input의 현재 value를 새로운 변수에 복사..
    toDoInput.value = "";
    // console.log(newTodo, toDoInput.value);

    // paintTodo 함수를 호출하고, newTodo인자값을 넘김.
    paintToDo(newTodo);

}

toDoForm.addEventListener("submit", handleToDoSubmit);