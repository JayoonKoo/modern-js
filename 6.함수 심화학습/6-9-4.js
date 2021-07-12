function f(a) {
  console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)


function throttle(fn, ms) {
	let isThrottled = false,
		savedArgs,
		savedThis;

	function wrapper () {
		if (isThrottled) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		fn.apply(this, arguments);

		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedThis = savedArgs = null;
			}
		}, ms)
	}

	return wrapper;
}