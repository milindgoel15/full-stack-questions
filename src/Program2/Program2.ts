function generateSeries(a: number): number[] {
	const result: number[] = [];
	for (let i = 1; result.length < a; i += 2) {
		result.push(i);
	}
	return result;
}

console.log(generateSeries(4)); // Output: [1, 3, 5, 7]
