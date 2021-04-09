// [7, 6, 4, -1, 1, 2], 16

// DRY RUN:

  // i, j, k, allPairSum
  // 0, 1, nl, {}
  // 1, 2, 0,

function fourNumberSum(array, targetSum) {
	let output = [];
  let allPairSum = {};
	for (let i=0; i<array.length - 1; i++){
		for (let j=i+1; j<array.length; j++){
			const sum = array[i]+array[j];
      const diff = targetSum - sum;
      if (diff in allPairSum){
        for (const pair of allPairSum[diff]){
          output.push(pair.concat(array[i], array[j]));
        }
      }
		}
    for (let k=0; k<i; k++){
  		const currSum = array[k]+array[i];
      if (!(currSum in allPairSum)){
        allPairSum[currSum] = [[array[i], array[k]]];
      }else {
        allPairSum[currSum].push([array[i], array[k]]);
      }
  	}
	}
	return output;
}
console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
