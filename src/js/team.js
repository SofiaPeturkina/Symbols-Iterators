export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(member) {
      if (this.members.has(member)) {
        throw new Error("Ошибка! Этот персонаж уже в команде!");
      }
      this.members.add(member);
    }
  
    addAll(...members) {
      members.forEach((member) => { this.members.add(member); });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  
    iterator() {
      const persons = this.toArray();
      const personsRange = {
        from: 0,
        to: persons.length - 1,
      };
      personsRange[Symbol.iterator] = function () {
        let current = this.from;
        const last = this.to;
        return {
          next() {
            if (current <= last) {
              return {
                done: false,
                value: persons[current++],
              };
            }
            return {
              done: true,
            };
          },
        };
      };
      for (const person of personsRange) {
        console.log(person);
      }
    }
  }
  