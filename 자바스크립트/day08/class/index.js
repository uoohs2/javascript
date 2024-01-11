class Teemo {
	constructor() {
		this.hp = 300;
		this.mp = 200;
		this.attack = 20;
		this.level = 1;
	}
	plainHit(unit) {
		unit.hp -= this.attack;
	}
}

class Minion {
	constructor(hp, power) {
		this.isAlive = true;
		this.hp = hp;
		this.power = power;
	}
	attack(unit) {
		unit.hp = unit.hp - this.power;
	}
	damage(unit) {
		this.hp = this.hp - unit.power;
		if (this.hp <= 0) {
			this.isAlive = false;
			console.log("미니언 죽음");
		}
	}
}

//instance
const teemo = new Teemo();
const a = new Minion(50, 10);
const b = new Minion(70, 20);
console.log(teemo.plainHit(a));
