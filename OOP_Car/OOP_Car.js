class CarFactory {
    constructor(car, sold, quarantee) {
      this.car = car;
      this.totalCar = Math.floor(Math.random() * sold);
      this.quarantee = Math.floor(Math.random() * quarantee);
    }
  
    setCar(newCar) {
      this.car = newCar;
    }
  
    setTotalCar(newSold) {
      this.totalCar = Math.floor(Math.random() * newSold);
    }
  
    setQuarantee(newQuarantee) {
      this.quarantee = Math.floor(Math.random() * newQuarantee);
    }
  
    getCar() {
      return this.car;
    }
  
    getTotalCar() {
      return this.totalCar;
    }
  
    getQuarantee() {
      return this.quarantee;
    }
  
    resultArea() {
      const resultCarFactory = `This car from ${this.car} has been sold ${
        this.totalCar
      } times per months and has ${this.quarantee} days quarantee`;
      return resultCarFactory;
    }
  }
  
  class Car {
    constructor(merk) {
      this.merk = merk;
    }
  
    setMerk(newMerk) {
      this.merk = newMerk;
    }
  
    getMerk() {
      return this.merk;
    }
  
    resultArea() {
      const carMerk = `This car is produced by ${this.merk}`;
      return carMerk;
    }
  }
  
  class Tyre {
    constructor(totalTyre) {
      this.totalTyre = totalTyre;
    }
  
    setTotalTyre(newTotalTyre) {
      this.totalTyre = newTotalTyre;
    }
  
    getTotalTyre() {
      return this.totalTyre;
    }
  
    resultArea() {
      const totalTyreOfCar = `This car has ${this.totalTyre} tyres`;
      return totalTyreOfCar;
    }
  }
  
  class Seat {
    constructor(totalSeat) {
      this.totalSeat = totalSeat;
    }
  
    setSeat(newTotalSeat) {
      this.totalSeat = newTotalSeat;
    }
  
    getSeat() {
      return this.totalSeat;
    }
  
    resultArea() {
      const totalOfSeat = `This car has ${this.totalSeat} seats`;
      return totalOfSeat;
    }
  }
  
  class Door {
    constructor(doorType) {
      this.doorType = doorType;
    }
  
    setDoorType(newDoorType) {
      this.doorType = newDoorType;
    }
  
    getDoorType() {
      return this.doorType;
    }
  
    resultArea() {
      const typeOfDoor = `This car has ${this.doorType} type of door`;
      return typeOfDoor;
    }
  }
  
  class Body {
    constructor(bodyType) {
      this.bodyType = bodyType;
    }
  
    setBodyType(newBodyType) {
      this.bodyType = newBodyType;
    }
  
    getBodyType() {
      return this.bodyType;
    }
  
    resultArea() {
      const typeOfBody = `This car has ${this.bodyType} type of body`;
      return typeOfBody;
    }
  }
  
  class Engine {
    constructor(engineType) {
      this.engineType = engineType;
    }
  
    setEngineType(newEngineType) {
      this.engineType = newEngineType;
    }
  
    getEngineType() {
      return this.engineType;
    }
    resultArea() {
      const typeOfEngine = `This car has ${this.engineType} Engine`
      return typeOfEngine
    }
  }
  
  class Honda extends Car {
    constructor(tyre, seat, door, body, engine) {
      super(tyre, seat, door, body, engine);
      this.tyre = tyre;
      this.seat = seat;
      this.door = door;
      this.body = body;
      this.engine = engine;
    }
  
    setTyre(newTyre) {
      this.tyre = newTyre;
    }
  
    setSeat(newSeat) {
      this.seat = newSeat;
    }
  
    setDoor(newDoor) {
      this.door = newDoor;
    }
  
    setBody(newBody) {
      this.body = newBody;
    }
  
    setEngine(newEngine) {
      this.engine = newEngine;
    }
  
    getTyre() {
      return this.tyre;
    }
  
    getSeat() {
      return this.seat;
    }
  
    getDoor() {
      return this.door;
    }
  
    getBody() {
      return this.body;
    }
  
    getEngine() {
      return this.engine;
    }
  
    resultArea() {
      const theCar = `A car with ${this.tyre} tyres, ${this.seat} seats, ${this.door} doors, ${
        this.body
      } type of body, and with ${this.engine} engine`;
      return theCar;
    }
  }
  
  const honda = new Car();
  honda.setMerk("Honda");
  console.log(honda.resultArea())
  
  //class tyre
  const tyreOfMobilio = new Tyre();
  tyreOfMobilio.setTotalTyre(4);
  console.log(tyreOfMobilio.resultArea());

  // class Seat
  const seatOfMobilio = new Seat();
  seatOfMobilio.setSeat(6);
  console.log(seatOfMobilio.resultArea());

  // class Door
  const doorOfMobilio = new Door();
  doorOfMobilio.setDoorType("Sliding")
  console.log(doorOfMobilio.resultArea());
  
  // Class Body
  const bodyOfMobilio = new Body();
  bodyOfMobilio.setBodyType("SUV");
  console.log(bodyOfMobilio.resultArea())

  // Class Engine
  const engineOfMobilio = new Engine();
  engineOfMobilio.setEngineType("Piston");
  console.log(engineOfMobilio.resultArea())
  
  // Class Honda ( )
  const mobilio = new Honda();
  mobilio.setTyre(tyreOfMobilio.totalTyre);
  mobilio.setSeat(seatOfMobilio.totalSeat);
  mobilio.setDoor(doorOfMobilio.doorType);
  mobilio.setBody(bodyOfMobilio.bodyType);
  mobilio.setEngine(engineOfMobilio.engineType);
  
  // Class Factory
  const newCar = new CarFactory();
  newCar.setCar(honda.merk);
  newCar.setTotalCar(5000);
  newCar.setQuarantee(321);

  console.log(newCar.resultArea())
  console.log(`${mobilio.resultArea()}`)

  
console.log(`
${mobilio.resultArea()} called Mobilio, from ${honda.merk}.
  ${newCar.resultArea()}`);

