function testSpread(a, b, c) {
	console.log(a + b + c);
}

function testRest(...arr) {
	let sum = 0;

	arr.forEach(function (value) {
		sum += value;
	});

	console.log(sum);
}

function createCar(property, value) {
	return {
		[property]: value,
		['_' + property]: value,
		[property.toUpperCase()]: value,
		['get' + property]() {
			return this[property];
		},
	};
}

let arr = [1, 2, 3];
testSpread(...arr);

testRest(1, 2, 3, 4, 5);

let car = createCar('vin', 1);
console.log(car);
console.log(car.getvin());

const ts = {
	a: 1,
	b: 2,
	c: {
		ca: 1,
		cb: 2,
		cc: 3,
	},
};

for (let item in ts) {
	console.log(`item: ${ts[item]}, type: ${typeof ts[item]}`);
}
