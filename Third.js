//Sort number in ascending order without using array.sort(). First convert number to array.

let number = 8046957321;

//converting number to array
let arr = number.toString().split("");

//sorting array without using array.sort()
//sorting in ascending order using bubble sort
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

arr.map((num) => console.log(num));
