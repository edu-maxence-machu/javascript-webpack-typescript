class Employee {
  readonly id: number;
  private firstName: string;
  private lastName: string;
  private salary: number = 0;

  constructor(firstName: string, lastName: string, salary: number = 0) {
    this.id = 1;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get getSalary(): number {
    return this.salary;
  }

  set setSalary(salary: number) {
    this.salary = salary;
  }

  mySalary(): number {
    return this.salary;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Employee;
