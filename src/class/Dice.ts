interface IDice {
  roll(): number;
}
class Dice implements IDice {
  private value: number;
  constructor() {
    this.value = 0;
  }
  public roll(): number {
    this.value = Math.floor(Math.random() * 6) + 1;
    return this.value;
  }
  public getValue(): number {
    return this.value;
  }
}

export default Dice;
