
printNumbers2(2, 10);


function printNumbers1(from, to) {
	let current = from;
	const intervalId = setInterval(() => {
		console.log(current++)
		if (current === to + 1) clearInterval(intervalId);
	}, 1000);
}

function printNumbers2(from, to) {
	let current = from;
	setTimeout(function run() {
		console.log(current++);
		if (current <= to) setTimeout(run, 1000);
	},1000);
}
