let numbers = document.querySelectorAll(".rate .nums > li");
let numbersArray = Array.from(numbers);
let selectedNum = document.querySelector(".seld");

numbersArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    numbersArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    selectedNum.innerHTML = e.currentTarget.innerHTML;
  });
});

let rateCard = document.querySelector(".rate");
let thankCard = document.querySelector(".thank");
let submButton = document.querySelector(".sub");

submButton.addEventListener("click", function () {
  rateCard.classList.add("done");
  thankCard.classList.add("show");
});
