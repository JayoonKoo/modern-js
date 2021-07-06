let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

// function sumSalaries(salaries) {
// 	if (salaries.length === 0) {
// 		return 0;
// 	}
// 	let sum = 0;
// 	Object.values(salaries).forEach(e => sum += e);
// 	return sum;
// }

// reduce 사용
function sumSalaries(salaries) {
	if (salaries.length === 0) {
		return 0;
	}
	return Object.values(salaries).reduce((a, b) => a+b, 0);
}