Function.prototype.defer = function(ms){
	setTimeout(this, ms);
}

function f() {
  console.log("Hello!");
}

f.defer(3000); // 1초 후 "Hello!" 출력

