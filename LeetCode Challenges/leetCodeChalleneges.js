"use strict";
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
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
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

/*
26. Remove Duplicates from Sorted Array:
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

The results must be placed in the first part of the array nums.  If there are k elements after removing the duplicates then the first k elements of nums should hold teh final result.  It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums
*/

//nums.length >= 0
//nums is sorted in non-decreasing order
//unique elements should appear only once

//have an array of numbers
//empty array
//loop through array of numbers
//compare values for duplicates
//if nums[i] === nums[i-1] && empty.array ! includes nums[i]
//empty array .push(nums[i])
//k = empty array .length
//return k

const removeDuplicatesLoop = function (nums) {
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && !results.includes(nums[i])) {
      results.push(nums[i]);
    }
  }
  return results.length;
};

//alternative solution

const removeDuplicates = function (nums) {
  const noDuplicatesSet = new Set(nums);
  const noDuplicatesArr = [...noDuplicatesSet];

  return noDuplicatesArr.length;

  //I recently learned about Sets so I thought this would be a great opportunity to use this new knowledge
  //since Sets only store unique values I used this to create a copy of the nums array
  // I then created a new array and used the spread operator to pull those values from noDupplicatesSet to add them to the new noDuplicatesArr
};

//alternative way to solve problem using a for loop:

const removeDuplicates2 = function (nums) {
  if ((nums.length = 0)) {
    return 0;
  }
  //if nums is empty return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) nums.splice(i--, 1);
  }
  //if the two values are equal to one another, remove the first copy of the two using splice

  return nums.length;
};

/*------------------------------------------------------------------------------------------------------*/

/**
 *Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 * if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.
 */

//have an array of integers
//have a val
//must remove all the values of the array that === val
//return the length of the array without the elements that === val

const removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
/*------------------------------------------------------------------------------------------------------*/

/**
 *You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.

 The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

 Increment the large integer by one and return the resulting array of digits.
 */

//have a large number that is stored into an array
//must add 1 to that number and return the resulting array of digits
//digits.lenght >= 1 & <= 100

//would work backwards from index nums.length - 1
//nums range 0-9
//digit[i] + 1
//digit[i] = (digit[i] + 1)-because were adding 1 to the digit - % 10 (will return 1-9 if any of these digits else will return a 0)
//if(digit[i]) - if value is not 0 - return digits
//if digit[i] = 0 then loop will continue
//if that condition is never met
//add one to front of the array using unshift(1)
//then return the digits array

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i]) {
      return digits;
    }
  }
  digits.unshift(1);

  return digits;
};

//alternate solution:

const plustOne2 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
/*------------------------------------------------------------------------------------------------------*/

/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 ***Think Fibonnaci sequence
 This sequence is the that each number is the sum of the preceding two numbers (Fn = Fn-1 + Fn-2) ex Fn = 3 then F3 = (F2) + (F1) = (2) + (1) = 3... for F5 = (F4) (F3) = (5) + (3) = 8 
 */

const climbStairs = function (n) {
  if (n < 3) return n;
  //if n === 0, 1, 2 then the number of ways to climb the stairs is = to n

  let first = 1;
  let second = 2;
  //must initialize two variables - first and second
  //will set equal to 1 and 2; so we will be using these numbers to add up to the current number

  for (let i = 2; i < n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }
  //starting at 2 and going until we reach n, we can have a for loop incrementing 1 number at a time
  //inside this loop initiate a new current variable which will store the sum of first and second
  //first will then == second and second will then equal the current value of current
  return second;
  //once the loops ends will we return whatever value second is (set equal to the current value of current)
};

/*------------------------------------------------------------------------------------------------------*/
/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * 
 * Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

 */

//provided string will only contain roman numerals
//string length >=1

//normally written greatest --> smallest
//if smaller RN is on L --> subtract that from the RN on R
//loop through string and add each value to a total

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const numeralToNumber = function (numeral) {
  let number = 0;

  for (let i = 0; i < numeral.length; i++) {
    if (
      symbols[numeral[i]] < symbols[numeral[i + 1]]
        ? (number -= symbols[numeral[i]])
        : (number += symbols[numeral[i]])
    );
  }
  return number;
};
console.log(numeralToNumber("MCMXCIV"));

/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/
/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

//array length >= 1;
//array[i].length >= 0;
//array strings are all lowercase letters

//edge cases = if empty array return ''

//variable to hold array[0]
//longest potential prefix string would be array[0]

//compare array[0] to the next element in the array
//if array[i] (1).indexOf(array[0] != 0)  --- won't know exactly how many times it will loop through so make a while loop?
//array[0] = array[0].slice(0, array[0].length -1)
//if array[0] eventually becomes empty then there is not matching prefix - return ''

//else (array[i] does containt the substring - then that value is now the longestCommonPrefix)
//after looping through the array return the remaining value of array[0]

const longestCommonPrefix = function (words) {
  if (!words.length) return "";

  let prefix = words[0];

  for (const word of words) {
    while (word.indexOf(prefix) != 0) {
      prefix.slice(0, prefix.length - 1);

      if (prefix === "") {
        break;
      }
    }
  }
  return prefix;
};

/*------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------*/

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
 */

//string only contains above characters
//must open bracket must be first and must close in order with same type of bracket
//loop through string
//depending on type of bracket, will push it's compliment to an empty array to store
//once we come across a closed bracket, compare to the last value of the array (array.pop())
//if not equal return false
//edge cases: string.length = 0; string.length % 2 != 0

const correctBracket = function (string) {
  if ((string.length = 0 || string.length % 2 != 0)) return false;

  const arr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      arr.push(")");
    } else if (string[i] === "[") {
      arr.push("]");
    } else if (string[i] === "{") {
      arr.push("}");
    } else {
      if (string[i] !== arr.pop()) {
        return false;
      }
    }
  }
  return arr.length === 0;
};
