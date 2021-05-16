function isValidSubsequence(array, sequence) {
  // Write your code here.
	let arrIdx = 0, seqIdx = 0;
	while(arrIdx < array.length && seqIdx < sequence.length){
		if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
		arrIdx++;
	}
	return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
