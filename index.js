function hasTargetSum(array, target) {
  const complementSet = new Set(); // Set to store the complements of elements

  for (let num of array) {
    const complement = target - num; // Calculate the complement of the current number

    if (complementSet.has(complement)) {
      return true; // Found a pair of elements that sum up to the target
    }

    complementSet.add(num); // Add the current number to the complement set
  }

  return false; // No pair of elements sum up to the target
}

// Add your own custom test cases here
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([0, -2, 7, -5, 1], -4));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 20));

module.exports = hasTargetSum;
