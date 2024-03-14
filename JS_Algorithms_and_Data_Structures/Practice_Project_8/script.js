const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  /* Because buttons associated with a form element submit by default, 
    you need to prevent that behavior. */
  event.preventDefault();
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  //   const sortedValues = bubbleSort(inputValues);
  //   const sortedValues = selectionSort(inputValues);
  const sortedValues = insertionSort(inputValues);

  updateUI(sortedValues);
};

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

/* bubble sort: compare two adjacent numbers and if one of them is larger,
than we switch their places (with a help of a temporary variable) */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

/* Selection sort: find the smallest value in the array, then swap
it with the first value in the array. Then, finds the next smallest 
value in the array, and swap it with the second value in the array. 
Continue iterating through the array until it is completely sorted. */

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
};

/* insertion sort: This algorithm works by building up a sorted array at 
the beginning of the list. It begins the sorted array with the first 
element. Then it inspects the next element and swaps it backward into the 
sorted array until it is in a sorted position, and so on.*/
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
};

sortButton.addEventListener("click", sortInputArray);
