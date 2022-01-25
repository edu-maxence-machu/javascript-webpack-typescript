import Game from "./Game";
interface IHTMLBoard {
  init(): void;
}

/*
  Class exécutant le code HTML du jeu
*/
class HTMLBoard extends Game implements IHTMLBoard {
  private DOM: HTMLElement;
  private startDOM: HTMLElement;
  private rollDOM: HTMLElement;
  private scoreDOM: HTMLElement;

  constructor() {
    super();
    this.DOM = document.getElementById("board")!;
    this.startDOM = document.getElementById("start-btn")!;
    this.rollDOM = document.getElementById("roll-btn")!;
    this.scoreDOM = document.getElementById("scores")!;

    this.startDOM.addEventListener("click", () => {
      this.HTMLHideStart();
      this.HTMLShowRoll();
    });

    this.rollDOM.addEventListener("click", () => {
      const res = this.play(); // FROM GAME

      res.forEach((value, index) => {
        const playerDOM = document.getElementById(`result-p${index + 1}`)!;
        playerDOM.innerHTML = value.toString();
      });

      this.HTMLShowScore();
    });
  }

  public init(): void {
    this.start();
    this.HTMLShowStart();
  }

  private HTMLShowScore(): void {
    console.log(this.players);
    // TODO: Afficher le score en fonction de la variable SCORE de Player
    // TODO: Afficher le nombre de manche restantes et jourées
    this.scoreDOM.innerHTML = `P1: ${this.players[0].score} - P2: ${this.players[1].score} (1/5)`;
  }

  private HTMLHideStart(): void {
    this.startDOM.style.display = "none";
  }

  private HTMLShowStart(): void {
    this.startDOM.style.display = "block";
  }

  private HTMLShowRoll(): void {
    console.log("HTMLShowRoll");
    this.rollDOM.style.display = "block";
  }
}

export default HTMLBoard;
