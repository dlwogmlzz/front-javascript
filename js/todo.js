// ※※버튼이 클릭되었다는 것을 뭘로 어떻게 확인할까? "eventListener"로 확인함..

// HTML에서 id가 todo-form인 form태그를 찾는다.
const toDoForm = document.getElementById("todo-form");
// 1. toDpInput을 전체HTML document에서 찾아볼 수 있다.
// or toDoInput을 toDoForm안에서만 찾아볼 수도 있다.
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

const toDos = [];

// localStorage로 배열로 받아오는 todos를 저장...
function saveToDos() {
    // localStorage.setItem("todos", toDos);

    // JSON.stringify()는 js의 object나 array나 어떤 것이든 string으로 바꿔주는 기능..
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    // 위의 JSON.stringify로 만든 string을 다시 JSON.parse로 배열로 만들 수 있다.

}

// todoList삭제 함수..
function deleteToDo(yap_event) {
    // 옛날과 다르게 콘솔에서 path를 찾아볼수가 없음..
    // 그래서 인자를 확인할때, 콘솔로그로 event.composedPath()라고 붙여줘야 됨..
    // 옛날은 mouseEvent라 떴지만, 지금은 pointerEvent라고 뜬다.
    // console.log(yap_event.composedPath());
    // console.log(yap_event.target);
    // console.dir(yap_event.target);
    
    // 부모의 정보를 얻을때.. , 어떤 버튼인지 innerText로 확인가능...
    // console.dir(yap_event.target.parentElement.innerText);
    // console.log(yap_event.target.parentElement);

    // delete Todo..
    const li = event.target.parentElement;
    li.remove();
}

// todo를 만드는 작업 함수..
function paintToDo(newTodo) { // newTodo인자 넣음.
    // console.log("I will paint", newTodo);
    // 1. li/span을 만들고, span의 텍스트를 변경.
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    // 여기서 문제점..
    // list에 item들을 추가할 수는 있지만, 지울 수는 없다는 것과 페이지를 새로고침하면, todoList들이 사라진다는것...

    // 2. todoList를 삭제하는 버튼 추가.
    const button = document.createElement("button");
    button.innerText = "✘";
    button.addEventListener("click", deleteToDo);

    // 3. li요소안에 span, button을 자식요소로 추가.(append는 항상 맨 마지막에..)
    li.appendChild(span)
    li.appendChild(button);
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

    // newTodo가 만들어질때 마다 그 텍스트를 array(toDos)에 push하기.
    toDos.push(newTodo);
    // paintTodo 함수를 호출하고, newTodo인자값을 넘김.
    paintToDo(newTodo);
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) { // savedToDos가 true인 경우라서 그냥 savedToDos만 써도 됨.
    // savedToDos가 localStorage에 존재하면.
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);

    // parsedToDos가 가지고 있는 각각의 item에 대해 sayHello를 실행해서 몇번을 동작시켰는지 확인..
    // parsedToDos.forEach(sayHello);

    parsedToDos.forEach((item) => console.log("this is the turn of", item));
}
