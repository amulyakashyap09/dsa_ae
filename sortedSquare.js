function sortedSquaredArray(array) {
  // Write your code here.
	let start = 0, end = array.length -1;
	let sorted = new Array(array.length).fill(0);
	for (let idx = array.length - 1; idx >= 0; idx--){
		let smallerValue = array[start];
		let largerValue = array[end];
		if (Math.abs(smallerValue) > Math.abs(largerValue)){
			sorted[idx] = smallerValue*smallerValue;
			start++;
		}else {
			sorted[idx] = largerValue*largerValue;
			end--;
		}
	}
  return sorted;
}

// Do not edit the line below.
console.log(sortedSquaredArray([-2, -1, 0, 1, 2, 3]));
