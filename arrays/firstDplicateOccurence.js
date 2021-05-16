// COMPLEXITY : O(n) time & space both

function firstDuplicateValue(array) {
  // Write your code here.
	let indexMap = {};
	let index = array.length+1; // this index will not exists
	// and can be used to check if any elemt found
	for (let i=0; i<array.length; i++){
		if (!(array[i] in indexMap)) {
			indexMap[array[i]] = i;
		}else {
			if (index > i) index = i;
			indexMap[array[i]] = i;
		}
	}
	if (index === array.length+1 || array.length < 1) return -1
  return array[index];
}

// Do not edit the line below.
console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
