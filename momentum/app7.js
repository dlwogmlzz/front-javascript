const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     // h1.className = "active";
//     const clickedClass = "clicked sexy-font";
//     if (h1.className === clickedClass) {
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
//     // console.log(h1.className);
// }

function handleTitleClick() {
    const clickedClass = "clicked";
    // 명시된 class가 classList.contains - HTML element의 class에 포함되어 있는지 알려줌.
    // 만약에 clickedClass가 h1의 classList에 포함되어 있지않으면..
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    // console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);