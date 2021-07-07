function makeCounter() {
	let count = 0;

	function counter() {
		return count ++;
	}

	counter.set = value => count = value;

	counter.descrese = () => count -=1;

	return counter;
}
