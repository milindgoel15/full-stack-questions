var Calculator = (function () {
	function Calculator(a, b, operation) {
		this.a = a;
		this.b = b;
		this.operation = operation;
	}
	Calculator.prototype.calculate = function () {
		switch (this.operation) {
			case "add":
				return this.a + this.b;
			case "subtract":
				return this.a - this.b;
			case "multiply":
				return this.a * this.b;
			case "divide":
				return this.b !== 0 ? this.a / this.b : "Error: Division by zero";
			default:
				return "Error: Invalid operation";
		}
	};
	return Calculator;
})();
// Example usage:
var calculator = new Calculator(10, 5, "add");
console.log(calculator.calculate()); // Output: 15
