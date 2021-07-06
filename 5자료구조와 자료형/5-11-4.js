
function getLastDayOfMonth(year, month) {
	const date = new Date(year, month + 1, 0);

	return date;
}

console.log(getLastDayOfMonth(2012, 1));