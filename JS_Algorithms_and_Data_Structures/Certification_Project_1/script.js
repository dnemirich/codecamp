const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");

function cleanInputString(str) {
  const regex = /[^a-z0-9]/g;
  return str.toLowerCase().replace(regex, "");
}

function checkPalindrome() {
  let isPalindrome;
  resultContainer.innerHTML = "";
  if (textInput.value.length === 0) {
    alert("Please input a value");
  } else {
    const str = cleanInputString(textInput.value);
    isPalindrome = str === str.split("").reverse().join("") ? true : false;
    resultContainer.innerHTML = isPalindrome
      ? `<strong>${textInput.value}</strong> is a palindrome`
      : `<strong>${textInput.value}</strong> is not a palindrome`;
    resultContainer.classList.remove("hide");
  }
}

checkButton.addEventListener("click", checkPalindrome);
