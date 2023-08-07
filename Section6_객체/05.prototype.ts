{
function Car(name,brand){
    this.name = name;
    this.brand = brand;
}

Car.prototype.sayName = function(){
    return this.brand + '-' + this.name
}

  class Car2 {
    constructor(name, brand) {
      this.name = name;
      this.brand = brand;
    }

    sayName() {
        return this.brand + '-' this.name;
    }
  }
}
