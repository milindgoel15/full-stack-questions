class Calculator {
	a: number;
	b: number;
	operation: string;

	constructor(a: number, b: number, operation: string) {
		this.a = a;
		this.b = b;
		this.operation = operation;
	}

	calculate(): number | string {
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
	}
}

const calculator = new Calculator(10, 5, "add");
console.log(calculator.calculate()); // Output: 15
