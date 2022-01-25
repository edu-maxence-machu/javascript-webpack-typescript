class EmployeeEnc {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(salary: number) {
    const isNegative = salary < 0;
    if (!isNegative) {
      this._salary = salary;
    }
  }
}

export default EmployeeEnc;
