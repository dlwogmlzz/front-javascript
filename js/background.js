const images = ["dawangam.jpeg", "Magdalena.jpeg", "Pragser.jpeg", "tagimahal.jpeg", "santorini.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

// Javascript에서 HTML element를 만듦..
const bgImage = document.createElement("img");

// <img src="img/~~.jpg"/> 이거랑 같음...
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);