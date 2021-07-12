let f = debounce(console.log, 1000);

f("a");
// setTimeout( () => f("b"), 100);
setTimeout( () => f("c"), 400);
// debounced function waits 1000ms after the last call and then runs: alert("c")


// 무조건 타이머 없애고, 함수 불린 시점부터 5000초 센다음 실행
function debounce(fn, delay) {
	let timer;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, arguments), delay);
	};
}

// function debounce(func, ms) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }