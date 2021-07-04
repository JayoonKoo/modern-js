let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary({}));

function topSalary(salaries) {
	if (salaries.length === 0) return null;
	let topSale = 0;
	let topName = "";
	for (let [name, salar] of Object.entries(salaries)) {
		if (topSale < salar) {
			topSale = salar;
			topName = name;
		}
	}

	return topName;
}