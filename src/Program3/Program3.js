function generateSeriesWithRepetition(a) {
	let result = [];
	let currentNumber = 1;
	for (let i = 1; i <= a; i++) {
		if (i % 2 === 0) {
			result.push(result[result.length - 1]);
		} else {
			result.push(currentNumber);
			currentNumber += 2;
		}
	}
	return result;
}

console.log(generateSeriesWithRepetition(6)); // Output: [1, 1, 3, 3, 5, 5]
