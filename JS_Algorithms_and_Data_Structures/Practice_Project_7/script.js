const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000,
  },
];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
          <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
            decimalToBinary(${obj.inputVal})
          </p>
        `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

/* Your Convert button should be working now. But it could get tiring for 
users to enter in a number, then click that button each time they want to 
convert from decimal to binary. It would be much more convenient to perform 
the conversion when the Enter or Return key is pressed. The keydown event 
fires every time a user presses a key on their keyboard, and is a good way 
to add more interactivity to input elements. Note: Since the Enter and 
Return keys have similar functions, they both have the same string value 
of Enter. */
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

/* The call stack is a collection of function calls stored in a stack 
structure. When you call a function, it is added to the top or of the 
stack, and when it returns, it is removed from the top / end of the 
stack.*/

/* When writing the recursive case, you need to remember two things:
1) What is the base case?
2) What is the least amount of work you need to do to get closer to the 
base case?
*/
