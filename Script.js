const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI <= 24.9) {
    status = "Normal weight";
  }
  if (BMI >= 25 && BMI <= 29.9) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obesity";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `which means you are <span id="comment">${status}</span>`;
});
