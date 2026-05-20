const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // h1.className = "active";
    const clickedClass = "clicked sexy-font";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    // console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);