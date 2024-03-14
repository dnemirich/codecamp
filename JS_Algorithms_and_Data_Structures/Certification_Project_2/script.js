const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanSymbols = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

const arabicToRoman = (number) => {
  let result = "";
  for (let i = 0; number; i++) {
    while (number >= arabicNumbers[i]) {
      number -= arabicNumbers[i];
      result += romanSymbols[i];
    }
  }
  return result;
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (isNaN(inputInt)) {
    output.innerText = "Please enter a valid number";
    return;
  }
  if (inputInt < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputInt >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  output.innerText = arabicToRoman(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
