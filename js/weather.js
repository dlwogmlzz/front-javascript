// 브라우저에서 유저의 위치 좌표를 알려주는 함수.(navigator.geolocation.getCurrentPosition)
// getCurrentPosition함수는 인자가 두개가 필요함.(1. 모든 게 잘 됐을 때 실행될 함수, 2. 에러가 발생했을 때 실행 될 함수.)

// API_KEY를 변수에 담음.
const API_KEY = "41411c6ac5537896e6ddb2756c6610c5";

// 1. 성공했을 때 함수.
function onGeoOk(position) {
    // console.log(position);
    const lat = position.coords.latitude;   // 현재 위치의 위도
    const lon = position.coords.longitude;  // 현재 위치의 경도

    console.log("You live in", lat, lon);
    // Javascript에서 URL을 부르는 방법.
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    
    // 웹 서버와 비동기적으로 데이터를 주고받기(네트워크 요청)
    // fetch(url); // ※비동기: promise(당장 뭔가 일어나지 않고 시간이 걸린뒤에 일어나는 것.)로 서버의 응답을 기다리지 않고 다음 코드를 먼저 실행하므로 웹 페이지가 멈추지 않음.
    fetch(url)  // url데이터를 호출!
    // response => response.json - 서버에서 응답이 오면, response.json으로 응답이 온 데이터를 객체/배열 형태로 변환해줌.
        .then(response => response.json())
        .then(data => { // 그 후 변환이 완료된 데이터가 data변수에 담김.
            // console.log(data.name, data.weather[0].main);   // 현재 날씨만 추출.
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
            city.innerText = data.name;
        });
}

// 취득한 위도 경도를 API계정을 열어서 위치(장소)로 변환할수 있게 해야 됨.

// 2. 에러 발생했을 때 함수.
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);