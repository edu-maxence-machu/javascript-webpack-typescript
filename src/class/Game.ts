import Player from "./Player";

interface IGame {
  players: Player[];
}

abstract class Game implements IGame {
  players: Player[];

  constructor() {
    this.players = [new Player(1), new Player(2)];

    console.log(this.players);
  }

  protected play = (): [number, number] => {
    // TODO: Faire jouer les dés des joueurs

    // this.players.forEach(player => {
    //   player.dice.roll();
    // });

    return [6, 3]; // RETURN RESULT
  };

  start(): void {
    console.log("Game initialized!");
  }
}

export default Game;
