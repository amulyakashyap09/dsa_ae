/**
Merge Overlapping Intervals

  Write a function that takes in a non-empty array of arbitrary intervals,
  merges any overlapping intervals, and returns the new intervals in no
  particular order.

  Each interval interval is an array of two integers, with
  interval[0] as the start of the interval and
  interval[1] as the end of the interval.
  Note that back-to-back intervals aren't considered to be overlapping. For
  example, [1, 5] and [6, 7] aren't overlapping;
  however, [1, 6] and [6, 7] <i>are</i> indeed
  overlapping.

  Also note that the start of any particular interval will always be less than
  or equal to the end of that interval.

  Sample Input
    intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

  Sample Output
    [[1, 2], [3, 8], [9, 10]]
    Merge the intervals [3, 5], [4, 7], and [6, 8].
    The intervals could be ordered differently

**/

// COMPLEXITY : O(nlogn) time && O(n) space

function mergeOverlappingIntervals(array) {

  if (array.length < 2) return array;
	array.sort((a, b)=>a[0]-b[0]);
	let output = [];
	let mergedInterval = [];
  let i=0;
	while (i<array.length){
		let interval = array[i];
		let nextInterval = array[i+1];
    if (!nextInterval){
      output.push(interval)
    }else {
  		if (interval[1] >= nextInterval[0]){
        let newInterval = [];
        newInterval[0] = interval[0] <= nextInterval[0] ? interval[0] : nextInterval[0];
        newInterval[1] = interval[1] <= nextInterval[1] ? nextInterval[1] : interval[1];
        array[i+1] = newInterval;

      }else {
  			output.push(interval);
  		}
    }
    i+=1;
	}
  return output;
}

console.log(mergeOverlappingIntervals([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ]
))
