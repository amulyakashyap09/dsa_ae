/**
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest
  difference.

  Sample Input
    arrayOne = [-1, 5, 10, 20, 28, 3]
    arrayTwo = [26, 134, 135, 15, 17]
  Sample Output
    [28, 26]
**/

// APPROACH : TWO POINTER &&
  // SORT BOTH ARRAYS first
  // Take two pointers at starting of both array
  // check if pointers are less array length respectively
  // if point1 elem < pointer2 elem then calc diff and increase pointer1
  // if point2 elem < pointer1 elem then calc diff and increase pointer2
  // else return the pair
  // now, check if diff < smallest, make the smallest = diff

// COMPLEXITY : O(nlog(n) + mlog(m)) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	let pair = [];
	arrayOne.sort((a, b)=>a-b)
	arrayTwo.sort((a, b)=>a-b)
	let i1=0, i2=0;
	let smallest = Infinity;
	let current = Infinity;
	while (i1 < arrayOne.length && i2 <arrayTwo.length){
		let fir = arrayOne[i1];
		let sec = arrayTwo[i2];
		if (fir < sec){
			current = sec - fir;
			i1++;
		}else if (sec < fir){
			current = fir - sec;
			i2++;
		}else {
			return [fir, sec];
		}
		if (current < smallest){
			smallest = current;
			pair = [fir, sec];
		}
	}
	return pair;
}

// Do not edit the line below.
console.log(smallestDifference([ -1, 5, 10, 20, 28, 3 ],[ 26, 134, 135, 15, 17 ]));
