/**
  Write a function that takes in an array of at least two integers and that
  returns an array of the starting and ending indices of the smallest subarray
  in the input array that needs to be sorted in place in order for the entire
  input array to be sorted (in ascending order).

  If the input array is already sorted, the function should return [-1, -1]

  Sample Input
    array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

  Sample Output
    [3, 9]
**/

// COMPLEXITY: O(n) time && O(n) Space

function isOutOfOrder (i, num, array){
	if (i===0) return num > array[i+1];
	if (i === array.length-1) return num < array[i-1];
	return num > array[i+1] || num < array[i-1];
}
function subarraySort(array) {
	const len = array.length;
	let min = Infinity, max=-Infinity;

	for (let i=0; i<len;i++){
		const ele = array[i];
		if (isOutOfOrder(i, ele, array)){
			min = Math.min(min, ele)
			max = Math.max(max, ele)
		}
	}

	if (min == Infinity){
		return [-1, -1];
	}

	let lPointer = 0;
	while (min >= array[lPointer]){
		lPointer++;
	}

	let rPointer = array.length -1;
	while (max <= array[rPointer]){
		rPointer--;
	}

	return [lPointer, rPointer];
}
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
