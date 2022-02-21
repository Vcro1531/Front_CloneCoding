const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const changeimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${changeimage}`;

document.body.appendChild(bgImage);
