/* Bit Counting:
This challenge requires you to write a function that takes an integer as input, and returns the number of bits
that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative
*/

/*this challenge was very difficult to comprehend at first as I am not as familiar with binary representation of numbers but after looking into some discussions on what the challenge was asking me to solve I felt more confident in giving it a shot. */

const countBits = function (n) {
  //I can use the .toString(2) in order to convert the number to a string using 2 as the base to use to represent the numeric values
  //I would then convert that string to an array using .join('')
  const numArr = n.toString(2).join("");
  //from here I would need to return the number of bits that are equal to the number 1; this could be accomplished several different ways including using the array method of .reduce to add all the 1's to give me my solution.  I initially did this:
  const result = numArr.reduce((sum, num) => sum + Number(num), 0);
  //don't forget to conver the individual values of the array back to a Number type in order to perform addition
  return result;
};
//I realize this solution will work but it can be refactored to even fewer lines.

const countBitsSingleLine = function (n) {
  return n.toString(2).split("0").join("").length;

  //here we are performing similar steps as above but we are removing the 0's from the binary representation string and then joining the remaining values which are the 1's into an array and then using .length() to get then number of 1's which will give us our result.
};
/*------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------------------*/

/* Write a Code-Golf Scoring Function:
Problem:
Your job is to write a function to score a game of code golf by these rules. The rules for scoring are as follows:

all whitespace characters are counted as 0 strokes
consecutive alphanumeric characters (includes underscore) are grouped together, and the group counts as 1 stroke
non-alphanumeric characters (except underscore) are each counted as 1 stroke
Your function will be passed a string. You should calculate the number of strokes from the string and return the score as an integer.

*/
/*------------------------------------------------------------------------------------------------------*/
