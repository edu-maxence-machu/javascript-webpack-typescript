type Army = Array<Soldier | Commander>;

class Player {
  army: Army;
  constructor(army: Army) {
    this.army = army;
  }
}

class Ennemy extends Player {}

class Ally extends Player {}

interface ISoldier {
  identifier: number;
  life: number;
}

class Soldier implements ISoldier {
  protected _life: number;
  readonly identifier: number;

  constructor(identifier: number) {
    this._life = 100;
    this.identifier = identifier;
  }

  get life(): number {
    return this._life;
  }
}

class Commander extends Soldier {
  constructor(identifier: number) {
    super(identifier);
    this._life = 200;
  }
}

interface Battle {
  start(): void;
  getTotalLife(): [number, number];
}
class Battle {
  private ally: Ally;
  private enemy: Ennemy;

  constructor(ally: Player, enemy: Ennemy) {
    this.ally = ally;
    this.enemy = enemy;
  }

  public start(): void {
    console.log("Battle started!");
    console.log("Player army: ", this.ally.army);
    console.log("Ennemy army: ", this.enemy.army);
  }

  public getTotalLife(): [number, number] {
    const allyLife = this.ally.army.reduce(
      (acc, soldier) => acc + soldier.life,
      0
    );
    const enemyLife = this.enemy.army.reduce(
      (acc, soldier) => acc + soldier.life,
      0
    );
    return [allyLife, enemyLife];
  }
}

const playerArmy: Army = [
  new Soldier(1),
  new Soldier(2),
  new Soldier(3),
  new Commander(4),
];
const ennemyArmy: Army = [
  new Soldier(5),
  new Soldier(6),
  new Commander(7),
  new Commander(8),
];

const player = new Player(playerArmy);
const ennemy = new Ennemy(ennemyArmy);
const battle = new Battle(player, ennemy);
battle.start();
console.log(battle.getTotalLife());

export {};
