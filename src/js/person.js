export default class Person {
    constructor(name) {
      this.name = name;
      this.type = this.constructor.name;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.deffence = 0;
    }
  }
  