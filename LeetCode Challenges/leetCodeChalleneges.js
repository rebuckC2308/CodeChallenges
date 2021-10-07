/* 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

My thought process:
return indices of the two numbers that add up to the target number
each input has exactly one solution
cannot use the same element twice
can return indices in any order

arrays of at least length >= 2

1 for loop to loop through array
a nested for loop to loop through remaining values to add up to target

*/
const twoSum = function(nums, target) {
    
    for(let i=0; i < nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }    
        }
    }

/*------------------------------------------------------------------------------------------------------*/
/*
442. Find All Duplicates in an Array:
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

*/

const findDuplicates = function (nums) {
  //need to store the numbers that are duplicated into an array
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    //want to get the absolute value of the number at nums[i] because we will convert to a negative number later, we subtract one for the index to remain within the number of indices in the array
    const index = Math.abs(nums[i]) - 1;
    //conditional - if the number at nums[index] is < 0 we will add index (number that is inside the array) to our result array
    //if it is > 0 than we will multiply the number at nums[index] by -1 which will keep track of if we encountered that digit before
    if (nums[index] < 0) {
      //add 1 back to index
      result.push(index + 1);
    } else {
      nums[index] *= -1;
    }
  }
  return result;
};
/*------------------------------------------------------------------------------------------------------*/
