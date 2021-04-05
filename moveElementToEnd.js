/**

Move Element To End

  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

  Sample Input
    array = [2, 1, 2, 2, 2, 3, 4, 2]
  Sample Output
    [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently

**/

// COMPLEXITY : O(n) Time &&  O(1) Space

// APPROACH : TWO POINTER
  // make two pointer at start and end of array
  // loop it unless both are less or equal
  //  Move Inward by Loop if end pointer is equal to toMove Element
  //  if start Element is toMove swap the start and end Element
  // increase start pointer

function moveElementToEnd(array, toMove) {
  // Write your code here.
	let end = array.length - 1;
	let start = 0;
	while (start < end){
		while (start < end && array[end] === toMove) end--;
		if (array[start] === toMove) {
			[array[start], array[end]] = [array[end], array[start]];
		}
		start++;
	}
	return array;
}
