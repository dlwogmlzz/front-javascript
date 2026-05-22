const clock = document.querySelector("h2#clock");

function getClock() {
    // Date오브젝트 생성.
    // Date object는 호출하는 당시의 날짜와 시간을 알려준다.
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setTimeout - 한번 띄움
// setTimeout(sayHello, 5000);

// setInterval - 매번(1초후) 무슨 일이 일어나게 하고 싶을때 사용.(계속 띄움.)
// website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록...
getClock();
setInterval(getClock, 1000);

