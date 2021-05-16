/**
Array Of Products


  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at <span>output[i] is equal to the product of
  every number in the input array other than input[i]

  Sample Input
    array  = [5, 1, 4, 2]
  Sample output
    [8, 40, 10, 20]

**/

function arrayOfProducts(array) {
  // Write your code here.
	// console.log(array);
	let output = new Array(array.length).fill(1);
	let leftProduct = 1;
	for (let i=0; i<array.length; i++){
		output[i] = leftProduct;
		leftProduct *= array[i];
	}
	console.log(output);// [ 1, 5, 5, 20 ]
	let rightProduct = 1;
	for (let i=array.length-1; i > -1; i--){
		output[i] *= rightProduct;
		rightProduct *= array[i];
	}
	// console.log(output);
	return output;
}

console.log(arrayOfProducts[5, 1, 4, 2]);
