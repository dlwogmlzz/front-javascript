const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClicked() {
    // const clickedClass = "clicked";
    // toggle기능으로 if문으로 하지 않고 한번에
    // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
    // 만약 있다면, toggle이 clicked를 제거해준다.
    // 만약에 h1의 classList에 clicked가 존재하지 않다면,
    // toggle은 clicked를 classList에 추가해준다.
    h1.classList.toggle("clicked"); // 변수로 안만들고 "clicked"한번만 적으면 됨.
}

h1.addEventListener("click", handleTitleClicked);