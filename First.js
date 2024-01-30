//function to find and return sum of all positive numbers in the array

const arr = [-2, 5, 3, -8, 10, -4];

function sumPositive(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      //adding positive numbers
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumPositive(arr));
