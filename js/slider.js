const firstDot = document.getElementById("dot0");
const secondDot = document.getElementById("dot1");
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById("left-arrow");
const slider = document.getElementsByClassName("slider");

const Images = [];
Images[0] = "url('../img/bg.jpg')";
Images[1] = "url('../img/about-bg.jpg')";

let i = 0;

function changeImage() {
  checkDot();
  slider[0].style.backgroundImage = Images[i];

  if (i < Images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

function clickedImage(x) {
  slider[0].style.backgroundImage = Images[x];
  i = x;
  checkDot();
}

firstDot.addEventListener("click", function () {
  clickedImage(0);
});

secondDot.addEventListener("click", function () {
  clickedImage(1);
});

leftArrow.addEventListener("click", function () {
  let temp = i - 1;
  if (temp < 0) {
    clickedImage(1);
  } else {
    clickedImage(temp);
  }
});

rightArrow.addEventListener("click", function () {
  let temp = i + 1;
  if (temp > 1) {
    clickedImage(0);
  } else {
    clickedImage(temp);
  }
});

function checkDot() {
  if (i == 0) {
    firstDot.classList.add("active");
    secondDot.classList.remove("active");
  } else if (i == 1) {
    firstDot.classList.remove("active");
    secondDot.classList.add("active");
  }
}

// window.onload = dotClicked;
