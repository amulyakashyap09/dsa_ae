/**
WAP to check if given input is Subsequence of the other string or not

ex:
  str = "coronavirus"
  subStr = "crnas"
  output = true

  str = "coronavirus"
  subStr = "abcde"
  output = false
**/

const isSubsequence = (subStr, str)=>{
    let m = subStr.length;
    let n = str.length;

    let i=0;
    let j=0;

    while (j < m && i < n){
    	if (subStr[j] === str[i]){
    		j+=1;
    	}
    	i+=1;
    }

    return j === m;
}

console.log(isSubsequence("abcde", "coronavirus")); // false
console.log(isSubsequence("crnas", "coronavirus")); // true
