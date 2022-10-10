import Person from "../person";
import Team from "../team";

test("should add member to team", () => {
  const bowman = new Person("Лучник");
  const team = new Team();
  team.add(bowman);

  expect(team.members.has(bowman)).toBe(true);
});

test("can`t add the same member more than once", () => {
  const bowman = new Person("Лучник");
  const team = new Team();
  team.add(bowman);

  expect(() => team.add(bowman)).toThrow(new Error("Ошибка! Этот персонаж уже в команде!"));
});

test("should add several members to team", () => {
  const bowman = new Person("Лучник");
  const swordsman = new Person("Мечник");
  const magician = new Person("Маг");
  const daemon = new Person("Демон");
  const undead = new Person("Вампир");
  const zombie = new Person("Зомби");
  const team = new Team();
  team.addAll(bowman, swordsman, magician, daemon, undead, zombie);

  expect(team.members).toEqual(new Set([bowman, swordsman, magician, daemon, undead, zombie]));
});

test("should make array", () => {
  const bowman = new Person("Лучник");
  const swordsman = new Person("Мечник");
  const magician = new Person("Маг");
  const daemon = new Person("Демон");
  const undead = new Person("Вампир");
  const zombie = new Person("Зомби");
  const team = new Team();
  team.addAll(bowman, swordsman, magician, daemon, undead, zombie);
  const result = team.toArray();
  const expected = [bowman, swordsman, magician, daemon, undead, zombie];

  expect(result).toEqual(expected);
});

test("should iterate", () => {
  const bowman = new Person("Лучник");
  const swordsman = new Person("Мечник");
  const magician = new Person("Маг");
  const daemon = new Person("Демон");
  const undead = new Person("Вампир");
  const zombie = new Person("Зомби");
  const team = new Team();
  team.addAll(bowman, swordsman, magician, daemon, undead, zombie);
  const result = team.iterator();
  const expected = team.toArray().forEach((person) => console.log(person));

  expect(result).toEqual(expected);
});

