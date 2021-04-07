/**

Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.

  A peak is defined as adjacent integers in the array that are <b>strictly</b>
  increasing until they reach a tip (the highest value in the peak), at which
  point they become <b>strictly</b> decreasing. At least three integers are required to
  form a peak.

  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0.
  Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly
  decreasing integers after 3.

  Sample Input
    array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
  Sample Output
    6 // 0, 10, 6, 5, -1, -3

**/

// COMPLEXITY : // O(n) time | O(n) space

function longestPeak(array) {

	let left = 0;
	let peak = [];
	let longestPeak = [];
	let longestPeakCount = 0;

	for (let i=0; i<array.length - 1; i++){

		left = i;
		let isIncreasing = 0;

		if (array[left] === array[left+1]){
			peak = [];
			continue;
		}

		while (array[left] < array[left+1]){
			isIncreasing = 1;
			peak.push(array[left])
			left++;
		}

		if (!isIncreasing) {
			peak=[];
			continue;
		}

		let isDecresing = 0;

		while (array[left] > array[left+1]){
			isDecresing = 1;
			peak.push(array[left])
		  left++;
		}
		if (isDecresing) {peak.push(array[left])}else {
			peak = [];
		}

		if (peak.length > longestPeakCount){
			longestPeakCount = peak.length;
			longestPeak = peak;
		}
		peak=[];
	}
	return longestPeakCount
}

// Do not edit the line below.
console.log(longestPeak([
   1, 2, 3,  3,  4, 0,
  10, 6, 5, -1, -3, 2,
   3
]));
