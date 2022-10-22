//Button Layout

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

//Carousel

function carousel() {

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

//Fetch from API

let image1 = document.getElementById("slide-img-1");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image1.src = result.message;
    })
    .catch((err) => console.log(err));

let image2 = document.getElementById("slide-img-2");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image2.src = result.message;
    })
    .catch((err) => console.log(err));

let image3 = document.getElementById("slide-img-3");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image3.src = result.message;
    })
    .catch((err) => console.log(err));

let image4 = document.getElementById("slide-img-4");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image4.src = result.message;
    })
    .catch((err) => console.log(err));

let image5 = document.getElementById("slide-img-5");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image5.src = result.message;
    })
    .catch((err) => console.log(err));

let image6 = document.getElementById("slide-img-6");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image6.src = result.message;
    })
    .catch((err) => console.log(err));

let image7 = document.getElementById("slide-img-7");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image7.src = result.message;
    })
    .catch((err) => console.log(err));

let image8 = document.getElementById("slide-img-8");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image8.src = result.message;
    })
    .catch((err) => console.log(err));

let image9 = document.getElementById("slide-img-9");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image9.src = result.message;
    })
    .catch((err) => console.log(err));

let image10 = document.getElementById("slide-img-10");

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      image10.src = result.message;
    })
    .catch((err) => console.log(err));