// Complete the js code
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}
	getMakeModel () {
		return `${this.make} ${this.model}`;
	}
}

// function Car(make, model) {}
class SportsCar extends Car {
	constructor(make, model, topSpeed) {
		super(make, model);
		this.topSpeed = topSpeed;
	}
	getTopSpeed() {
		return this.topSpeed;
	}
}

// function SportsCar(make, model, topSpeed) {}

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel());
console.log(car.getTopSpeed());



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
