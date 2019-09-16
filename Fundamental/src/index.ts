interface Human1 {
  name: string;
  age: number;
  gender: string;
}

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
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

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} you are a ${person.gender}`;
};
const sayHi2 = (person: Human1): string => {
  return `Hello ${person.name}, you are ${person.age} you are a ${person.gender}`;
};

console.log(sayHi(person));
console.log(sayHi2(person));

export {};
