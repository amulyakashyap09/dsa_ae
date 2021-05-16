
  /* Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  target = 10
  output = [-1, 11]
  */


// O(N^2) time  && O(1) space
function twoNumberSum1(array, targetSum) {
  // Write your code here.
	if (array.length < 1) return [];
	for (let i=0; i<array.length-1; i++){
		const f = array[i];
		for (let j=i+1; j<array.length; j++){
			const s = array[j];
			if (f+s === targetSum){
				return [f, s];
			}
		}
	}
	return [];
}

function twoNumberSum2(array, targetSum) {
  // Write your code here.
	let hashMap = {};
	for (let num of array){
		const val = targetSum - num;
		if (val in hashMap){
			return [num, val];
		}else {
			hashMap[num] = true;
		}
	}
	return [];
}

function twoNumberSum3(array, targetSum) {
  // Write your code here.
	array.sort((a, b) => a - b)
	let left = 0, right = array.length - 1;
	while (left < right){
		let currSum = array[left]+array[right];
		if (currSum === targetSum){
			return [array[left], array[right]]
		}else if (currSum < targetSum){
			left++;
		}else{
			right--;
		}
	}
	return [];
}

console.log(twoNumberSum1([1, 2, 3, 4], 7), twoNumberSum2([1,2,3,4], 7), twoNumberSum3([1, 2, 3, 4], 7));
