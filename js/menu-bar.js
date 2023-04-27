const pickMenu = document.getElementById("menu");

document.querySelector("#menu-bar").onclick = () => {
  pickMenu.classList.toggle("active");
};

//if click every where outside itself, navbar will be closed

const menuBar = document.querySelector("#menu-bar");

document.addEventListener("click", function (e) {
  if (!menuBar.contains(e.target) && !pickMenu.contains(e.target)) {
    pickMenu.classList.remove("active");
  }
});
