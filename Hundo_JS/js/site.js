// all selectors
let startInput = document.getElementById("startValue");
let endInput = document.getElementById("endValue");
let button = document.getElementById("btnSubmit");

// event listener
button.addEventListener("click", generateNumbers);

function generateNumbers() {
  let startValue = startInput.value;
  let endValue = endInput.value;

  let numbers = [];

  for (let i = startValue; i <= endValue; i++) {
    numbers.push(i);
  }

  console.log(numbers);
}

function displayNumbers() {}
