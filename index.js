// corrected version of the question in the previous lab.

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0;i<array.length; i++){
    // n steps
    const complement =target -array[i]
    for(let j = i + 1;j < array.length; j++){
      // n*n steps
      if (array[j]=== complement)return true 
    }
  }
 return false;
}
//make a function that checks of two numbers in an array sums to some target number.


/* 
  Write the Big O time complexity of your function here
  runtime: o(n^2)
  cpace complexity: 
*/

/* 
  Add your pseudocode here
  Given an array 
  create an object to keep trach of numbers we've already seen 
  for example seenNumbers ={}-an empty object. when an array is iterated through, the number is the array already seen are stored in the empty object.
  iterate through each number in the array 
  for each number in  the array, identify the complement that when added to our number 
  the sum is the target.(complement = target - num)
  check if the number is in the array
  if so return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
