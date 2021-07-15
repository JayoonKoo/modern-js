let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
	stomach: [],
  __proto__: hamster
};

let lazy = {
	stomach: [],
  __proto__: hamster
};

// 햄스터 한 마리가 음식을 찾았습니다.
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// 이 햄스터도 같은 음식을 가지고 있습니다. 왜 그럴까요? 고쳐주세요.
console.log( lazy.stomach ); // apple