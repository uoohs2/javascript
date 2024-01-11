const monitor = {
	brand: "nobrand",
	inch: 25,
	price: 110000,
	modelName: "mega001",
}; // 구조화 할당

for (let key in monitor) {
	console.log(`key:${key},value:${monitor[key]}`);
}
const keys = Object.keys(monitor);
const values = Object.values(monitor);

const { inch, price } = monitor; //destructuring 비구조화 할당
