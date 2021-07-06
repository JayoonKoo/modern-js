let date = new Date(2012, 0, 3);  // 2012년 1월 3일
console.log( getWeekDay(date) );    


function getWeekDay(date) {
	const day = date.getDay();
	const output = ['일','월','화','수','목','금','토'];
	console.log(day);

	return output[day];
}
