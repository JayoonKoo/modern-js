function sum(a) {
	let currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	}

	f.toString = function() {
		return currentSum;
	};

	return f;
}

console.log(String(sum(1)(2)));
console.log(String(sum(1)(2)(3)));