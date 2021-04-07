/**
  Problem: SPIRAL TRAVERSAL

  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.

  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.

Sample Input
  array = [
    [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7],
  ]

  Sample Output
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  **/

// APPROACH : DFS

// COMPLEXITY : // O(n) time | O(n) space - where n is the total number of elements in the array

function inBounds(array, i, j, r, c){
  if (i < 0 || j < 0 || i >= r || j >= c || array[i][j] === -1){
		return false;
  }
  return true;
}

function traverse(array, i, j, r, c, output, dir){

  if (!inBounds(array, i, j, r, c)){
		return;
	}
	output.push(array[i][j]);
	array[i][j] = -1;

  if (dir === 0){
    if (!inBounds(array, i, j+1, r, c)){
      dir = 1;
      i += 1;
    }else {
      j+=1
    }
  }else if (dir === 1){
    if (!inBounds(array, i+1, j, r, c)){
      dir = 2;
      j -= 1;
    }else {
      i+=1
    }
  }else if (dir === 2){
    if (!inBounds(array, i, j-1, r, c)){
      dir = 3;
      i -= 1;
    }else {
      j-=1
    }
  }else if (dir === 3){
    if (!inBounds(array, i-1, j, r, c)){
      dir = 0;
      j += 1;
    }else {
      i-=1
    }
  }
  traverse(array, i, j, r, c, output, dir);
}

function spiralTraverse(array) {
	let row = array.length;
	let result = [];
	for (let i=0; i < row; i++){
		let col = array[i].length;
		for (let j=0; j< col; j++){
			if (array[i][j] !== -1){
				traverse(array, i, j, row, col, result, 0)
			}
		}
	}
  return result;
}

console.log(spiralTraverse([
  [ 1, 2, 3, 4 ],
  [ 12, 13, 14, 5 ],
  [ 11, 16, 15, 6 ],
  [ 10, 9, 8, 7 ]
]));
