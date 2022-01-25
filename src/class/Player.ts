import Dice from "./Dice";

interface IPlayer {
  dice: Dice;
  id: number;
  score: number;
}

export type PlayerID = 1 | 2;

class Player implements IPlayer {
  public dice = new Dice();
  public id: PlayerID;
  public score: number = 0;
  constructor(id: PlayerID) {
    this.dice = new Dice();
    this.id = id;
    this.score = 0;
  }

  addScore(score: number): number {
    this.score += score;
    return this.score;
  }
}

export default Player;
