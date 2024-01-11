//primitive type : str, number, null, undefined, bool
//reference type :

//Object
//key[중복 안됨, str or number]-value[중복 가능, any-type]

const car = {
	name: { brand: "benz", serialNumber: "mega001" },
	price: 6000,
	color: "white",
	builtYear: 2024,
	6000: "price",
	drive: function () {
		window.console.log("부릉부릉");
	},
};

//car.name 또는 car['name'] 로 불러올 수 있음
console.log(car.name.serialNumber);
car.drive();
