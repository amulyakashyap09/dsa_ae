/**
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you <b>cannot</b> create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example, if you're given <span>coins = [1, 2, 5]</span>, the minimum
  amount of change that you can't create is <span>4</span>. If you're given no
  coins, the minimum amount of change that you can't create is <span>1</span>.

**/

// APPROACH : SORT && CHECK IF
    // IF currCoinChange + 1 < coin return the currCoinChange+1
    // ELSE add coin to the currCoinChange
    // return currCoinChange + 1

// COMPLEXITY : O(NlogN) Time && O(1) Space

function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b)=>{return a-b});
  let currCoinChange = 0;
  for (let coin of coins){
  	if (coin > currCoinChange+1){
  		return currCoinChange+1;
  	}
  	currCoinChange+=coin;
  }
  return currCoinChange + 1;
}

console.log(nonConstructibleChange([
1, 1,  2, 3,
5, 7, 22
]));
