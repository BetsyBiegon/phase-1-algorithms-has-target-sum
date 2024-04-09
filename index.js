function hasTargetSum(array, target) {
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, loop through the rest of the array to find a pair
    for (let j = i + 1; j < array.length; j++) {
      // If the pair adds up to the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) - because of the nested loops
*/

/* 
  Add your pseudocode here
  1. Loop through each element in the array (first loop)
  2. Inside the first loop, loop through the rest of the array to find pairs (second loop)
  3. Check if the sum of the current element and the paired element equals the target
  4. If it does, return true
  5. If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  This solution uses two nested loops to iterate through each element in the array and check if there is a pair that adds up to the target. If a pair is found, the function returns true. If no pair is found after checking all possible combinations, the function returns false.
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
