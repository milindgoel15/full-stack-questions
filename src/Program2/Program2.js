function generateSeries(a) {
    var result = [];
    for (var i = 1; result.length < a; i += 2) {
        result.push(i);
    }
    return result;
}
// Example usage:
console.log(generateSeries(4)); // Output: [1, 3, 5, 7]
