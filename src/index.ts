import Employee from "./class/employee";
/* 
    Variables et types primitifs
*/
const age: number = 21;
const bool: boolean = true;
const name: string = "John";
const sentence: string = `Hello ${name}`;

// eslint-disable-next-line prefer-const
let und: undefined = undefined;
// und = 12; // erreur grâce à strictNullChecks

/* Array */

const array: number[] = [1, 2, 3];
const tuple: [number, string] = [1, "hello"];
const optionalTuple: [number, string?] = [1];

/* Object */

// Inférrence de type
type Dog = {
  name: string;
  age: number;
};
const rex: Dog = {
  name: "Rex",
  age: 12,
};

const animal: Dog | ICat = {
  name: "Rex",
  age: 12,
  miaou(): void {
    console.log("miaou");
  },
};

function getName(animal: Dog | ICat): string {
  return animal.name;
}

const riri: Dog[] = [
  {
    name: "Riri",
    age: 2,
  },
];

// Type anonyme
type humanCat = IPerson & ICat;

const garfield: humanCat = {
  name: "Garfield",
  firstName: "Tom",
  age: 12,
  lastName: "Cat",
  miaou: () => {
    console.log("maou");
  },
};
/* 
const robert: ICat = {
  miaou: () => {
    console.log("miaou");
  },
}; */

const robert: ICat = new Cat();

console.log("cat", garfield);

const employee = new Employee("John", "Doe");
console.log(employee.getFullName());
console.log(employee.getSalary);
console.log(employee.mySalary());

//employee.firstName = "Jane"; // erreur

//console.log(cat.color); // erreur car color n'existe pas

import "./class/heritage";
import "./battle";
import { Cat, ICat, IPerson } from "./class/heritage";
export {};
