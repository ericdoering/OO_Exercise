class Vehicle {
    constructor(make, model, year) {
        this.make = "Pontiac";
        this.model = "Aztec";
        this.year = 2005;
    }
    honk() {
        return "beep, beep"
    }
    toString(){
        return `My car is a used ${this.year} ${this.make} ${this.model}`
    }

};

class Car extends Vehicle {
    constructor(make, model, year){
    super("Chevy", "Corvette", 1969)
    this.numWheels = 4
    }
};

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(honda, 1000, 2010);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  };

  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = "4 cars";
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  };