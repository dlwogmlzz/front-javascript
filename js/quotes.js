const quotes = [
    {
        quote: "Thay must often change who would be constant in happiness or wisdom.",
        author: "- Confucius -",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "- Maya Angelou -",
    },
    {
        quote: "Your life is not a problem to solved but a gift to be enjoyed.",
        author: "- Wayne Muller -",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "- Nelson Mandela -",
    },
    {
        quote: "My entire life can be described in one sentence: It didn't go as planned, and that's okay.",
        author: "- Rachel Wolchin -",
    },
    {
        quote: "Remember that sometimes, not getting what you want is a wonderful stroke of luck.",
        author: "- Dalai Lama -",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "- Margaret Mead -",
    },
    {
        quote: "Life is too short for us to dwell on sadness. Cheer up and live life to the fullest.",
        author: "- Dexter Monterde -",
    },
    {
        quote: "Talk is cheap. Show me the code.",
        author: "- Linus Torvalds -",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "- Kamal Ravikant -"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Array안에 있는 element에 어떻게 접근하느냐??

// 1. 일단 콘솔로그로 화면에 표시되는지 확인.
// console.log(quotes[0]);
// console.log(quotes[Math.floor(Math.random() * 10)]); // 10개로 한정..

// 2. 위에서 만든 명언을 랜덤으로 콘솔화면에 출력.
// Math.floor에 대해서 찾아보기 
// console.log(quotes[Math.floor(Math.random() * quotes.length)]); // 점점 수가 늘어 날때는 변수의 길이로 등록해주면 문제 해결!!
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 점점 수가 늘어 날때는 변수의 길이로 등록해주면 문제 해결!!

// 3. 이제 quote와 author변수에 랜덤 명언변수를 innerText담아서 화면에 출력.
quote.innerText = todaysQuote.quote;    // index.html에 id가 quote인 div태그 안의 span태그에 표시되도록.
author.innerText = todaysQuote.author;  // index.html에 id가 author인 div태그 안의 span태그에 표시되도록.
