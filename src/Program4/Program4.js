var counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
};
function countMultiples(numbers) {
    numbers.forEach(function (num) {
        for (var i = 1; i <= 9; i++) {
            if (num % i === 0) {
                counts[i]++;
            }
        }
    });
    return counts;
}
var inputNumbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(inputNumbers));
// Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
