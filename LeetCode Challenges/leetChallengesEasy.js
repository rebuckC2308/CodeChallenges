"use strict";

//this file contains all 'Easy' Difficulty challenges from leet code in order:

/**
 * Challenge #1 Two Sum:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #9 Palindrome Number:
 *Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */
const palindromeNumber = function (num) {
  if (num < 0) return false;

  let numStr = String(num);
  numStr = numStr.split("").reverse().join("");

  return num === Number(numStr);
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #13 Roman to Integer:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
 */

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let value = 0;

  for (let i = 0; i < s.length; i++) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #14 Longest Common Prefix:
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

const longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }
  return prefix;
};

//using for-of loop:
const commonPrefix = function (words) {
  let prefix = words[0];

  for (const word of words) {
    while (word.indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return prefix;
    }
  }
  return prefix;
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #20 Valid Parentheses:
 * 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

const isValid = function (s) {
  let valid = [];

  if (s.length < 2) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      valid.push(")");
    } else if (s[i] === "{") {
      valid.push("}");
    } else if (s[i] === "[") {
      valid.push("]");
    } else {
      if (s[i] !== valid.pop()) {
        return false;
      }
    }
  }

  return valid.length === 0;
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #21 Merge Two Sorted Lists
 * 
 *Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 Cases to deal with:
    1. either 'a' or 'b' may be empty
    2. during processing either 'a' or 'b' may run out first
    3. there's the problem of starting the result list empty and building it up while going through 'a' and 'b'
 */

//Definition for a singly-linked list:
// function ListNode(value, next) {
//   this.value = value === undefined ? 0 : value;
//   this.next = next === undefined ? null : next;
// }

const mergeTwoLists = function (l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 === null ? l2 : l1;
    //if either list is empty/null then return the other list
  }

  let newList = new ListNode();
  let list3 = newList;
  //list3 head is (0, null)

  if (l1.value < l2.value) {
    list3.value = l1.value;
    l1 = l1.next;
  } else {
    list3.value = l2.value;
    l2 = l2.next;
  }
  //this if-else loop checks to see the smallest value at the beginning of each linked list
  //the smallest value becomes the head of the new list; then move the pointer in either list forward one place

  while (l1 != null || l2 != null) {
    //while either list is not empty
    if (l2 === null || (l1 != null && l1.value < l2.value)) {
      //if l2 is null OR l1 isn't null and l1.value is less than l2.value
      list3.next = l1;
      //the next node of list3 is set to list 1
      l1 = l1.next;
      //the pointer is then moved
    } else {
      list3.next = l2;
      l2 = l2.next;
      //similar to described in previous if block
    }

    list3 = list3.next;
    //move the pointer in list3
  }

  return newList;
};

//faster solution:

const merge2Lists = function (l1, l2) {
  let dummy = new ListNode(-1);
  //create a dummy node
  let prev = dummy;

  while (l1 != null && l2 != null) {
    //while neither list is empty:
    if (l1.val <= l2.val) {
      prev.next = l1;
      //set prev.next to l1
      l1 = l1.next;
      //move pointer of l1
    } else {
      prev.next = l2;
      l2 = l2.next;
      //same as described above but for l2
    }
    prev = prev.next;
    //move pointer in prev
  }

  prev.next = l1 == null ? l2 : l1;
  //if either list is empty set .next to the other list

  return dummy.next;
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #26 Remove Duplicates from Sorted Array:
 * 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i--, 1);
    }
  }
  return nums.length;
};

const removeDuplicatesUsingASet = function (nums) {
  if (nums.length === 0) return 0;

  let setNums = new Set(nums);
  nums.length = 0;
  nums = [...setNums];

  return nums.length;
};

// -----------------------------------------------------------------------------------

/**
 * Challenge #27 Remove Element:
 *
 *Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */
