"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = {
    name: "Kimspractice",
    age: 27,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age} you are a ${person.gender}`;
};
const sayHi2 = (person) => {
    return `Hello ${person.name}, you are ${person.age} you are a ${person.gender}`;
};
console.log(sayHi(person));
console.log(sayHi2(person));
//# sourceMappingURL=index.js.map