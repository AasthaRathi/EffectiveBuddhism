function scrollToDiv(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

document.querySelector(".down-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  scrollToDiv(this.getAttribute("href"));
});

const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
let flag = true;
btn.addEventListener("click", () => {
  if (flag) {
    btn.style.transform = "rotate(90deg)";
    flag = false;
    display.style.display = "block";
  } else {
    btn.style.transform = "rotate(0deg)";
    flag = true;
    display.style.display = "none";
  }
});
