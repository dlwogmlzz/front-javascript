const images = ["dawangam.jpeg", "Magdalena.jpeg", "Pragser.jpeg", "tagimahal.jpeg", "santorini.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

// Javascript에서 HTML element를 만듦..
const bgImage = document.createElement("img");

// <img src="img/~~.jpg"/> 이거랑 같음...
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
// appendChild/append가 가장 뒤에
document.body.appendChild(bgImage);
// prepend가 가장 앞에
// document.body.prepend(bgImage);