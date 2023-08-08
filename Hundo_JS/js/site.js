// all selectors
let startInput = document.getElementById("startValue");
let endInput = document.getElementById("endValue");
let button = document.getElementById("btnSubmit");
let table = document.getElementById("results");

// event listener
button.addEventListener("click", displayNumbers);

function generateNumbers() {
  let startValue = parseInt(startInput.value);
  let endValue = parseInt(endInput.value);

  let numbers = [];

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    for (let i = startValue; i <= endValue; i++) {
      numbers.push(i);
    }
  } else {
    alert("Please enter a number!");
  }

  return numbers;
}

function displayNumbers() {
  let numbers = generateNumbers();

  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number % 2 == 0) {
      templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
    } else {
      templateRows += `<tr><td>${number}</td></tr>`;
    }
  }

  table.innerHTML = templateRows;
}
