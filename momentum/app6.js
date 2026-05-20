// step1. h1 요소(element)를 선택한다.
// stpe2. 이벤트(click event)를 읽어라(listen).
// step3. 그 이벤트에 반응해라.*(react) - event가 발생했을 때, 어떤 행동을 해라.(click등등....)

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "skyblue") { // === 는 값과 타입이 모두 같은지 비교하는 연산자이다. ==는 값만 비교하는 연산자이다.
        // = 값을 바꿔주는.
        newColor = "MediumSpringGreen";
        console.log("color is MediumSpringGreen!");
    } else {
        newColor = "skyblue";
        console.log("color is skyblue!");
    }
    h1.style.color = newColor;
    console.log(newColor);
}

h1.addEventListener("click", handleTitleClick);