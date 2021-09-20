const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn1 = nums.pop();
console.log(popReturn1);
console.log(nums);
let popReturn2 = nums.pop();
console.log(popReturn2);
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn1 = nums.shift();
console.log(shiftReturn1);
console.log(nums);
let shiftReturn2 = nums.shift();
console.log(shiftReturn2);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let unshiftReturn = nums.unshift(1);
console.log(nums);
let unshiftReturn2 = nums.unshift(0);
console.log(nums);
let pushReturn1 = nums.push(5);
console.log(nums);
let pushReturn2 = nums.push(6);
console.log(nums);
