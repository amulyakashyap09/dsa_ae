function tournamentWinner(competitions, results) {
  // Write your code here.
	const dataMap = {};
	for (let i=0; i < competitions.length; i++){
		const comp = competitions[i];
		if (!dataMap[comp[0]]) dataMap[comp[0]] = 0;
		if (!dataMap[comp[1]]) dataMap[comp[1]] = 0;
		if (results[i] === 1){
			dataMap[comp[0]] += 3;
		}else {
			dataMap[comp[1]] += 3;
		}
	}
	// console.log(dataMap);
  return Object.keys(dataMap).reduce((a, b) => dataMap[a] > dataMap[b] ? a : b);
}

console.log(tournamentWinner([['HTML', 'C#'], ['C#', 'PYTHON'], ['PYTHON', 'HTML']], [0, 0, 1]))
