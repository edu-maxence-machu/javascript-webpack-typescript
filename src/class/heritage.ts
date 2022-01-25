export interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

export interface ICat {
  name: string;
  miaou(): void;
}

export type TEST = {};

export class Cat implements ICat {
  constructor(public name: string = "") {}
  miaou(): void {
    console.log("miaou");
  }
}

interface IEmployee extends IPerson {
  salary: number;
}

abstract class Person implements IPerson {
  protected readonly id: number;
  public firstName: string;
  public lastName: string;
  public age: number;
  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 12;
  }

  sayHello(): void {
    console.log("Hello");
  }

  sayMyName(): void {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

class Employee extends Person implements IEmployee {
  public readonly salary: number;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    salary: number,
    age: number
  ) {
    super(id, firstName, lastName, age);

    this.salary = salary;
  }
  public mySalary(): void {
    console.log(this.salary);
  }

  get getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    salary: number,
    age: number
  ) {
    super(id, firstName, lastName, salary, age);
  }

  public mySalary(): void {
    console.log(this.salary * 2);
  }

  get getSalary(): number {
    return 0;
  }
}

const employee: Employee = new Employee(1, "Evelyn", "Miller", 2000, 40);
const manager = new Manager(1, "Princess", "Leila", 2000, 40);
employee.sayHello();
manager.sayHello();
manager.mySalary();
employee.salary;

// Log: 2
//console.log(employee.getId());
//console.log(employee.salary);
//employee.salary = 3000; erreur

export {};
