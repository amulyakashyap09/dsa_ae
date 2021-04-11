/**

Find max difference between two prime number for a given range
Range  = 2, 10 Output = 5 (7-2)
Range  = 10, 20 Output = 8 (19-11)
**/

const maxDifference = (l, r)=>{
	let lst = [];
	let flag = 1;
	for (let i=l; i<=r; i++){
		flag=1;
		for (let j=2; j<i; j++){
			if (i%j === 0){
				flag-=1;
				break;
			}
		}
		if (flag === 1) lst.push(i)
	}
	let n = lst.length;
	console.log(lst);
	if (n>1){
		return lst[lst.length-1] - lst[0];
	}else if(n == 1){
		return 0;
	}else{
		return -1;
	}
}
console.log(maxDifference(8, 10));
console.log(maxDifference(1, 10));
console.log(maxDifference(5, 5));
