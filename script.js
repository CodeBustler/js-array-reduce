//Task 1: Sum of Numbers
// Write a function that takes an array of numbers and returns the sum of all the numbers. For example, if the input array is [1, 2, 3, 4, 5], the output should be 15.

let nums = [1, 2, 3, 4, 5, 5];
let sum = nums.reduce((result, item) => result + item);
console.log(sum);

//Task 2: Concatenate Strings
//Write a function that takes an array of strings and returns a single string that is the concatenation of all the strings in the array. For example, if the input array is ["Hello", " ", "World!"], the output should be "Hello World!".

let string = ['Hello', ' ', 'World!'];
let concat = string.reduce((result, item) => result + item);
console.log(concat);

//Task 3: Find Maximum Number
//Write a function that takes an array of numbers and returns the maximum number in the array. For example, if the input array is [4, 2, 9, 7, 5], the output should be 9.

function maxNum(numbers) {
  return numbers.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, numbers[0]);
}

let numb = [4, 2, 9, 7, 5];
let maxNumber = maxNum(numb);
console.log(maxNumber);
