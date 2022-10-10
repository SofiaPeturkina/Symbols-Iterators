import Person from "./person";
import Team from "./team";

console.log("app worked");

const bowman = new Person("Лучник");
const swordsman = new Person("Мечник");
const magician = new Person("Маг");
const daemon = new Person("Демон");
const undead = new Person("Вампир");
const zombie = new Person("Зомби");
const team = new Team();

team.add(bowman);
console.log(team.members.has(bowman));

team.addAll(bowman, swordsman, magician, daemon, undead, zombie);
console.log(team.members);
console.log(team.toArray());

team.iterator();

