import Board from "./class/HTMLBoard";
import Dice from "./class/Dice";
import Game from "./class/Game";
import HTMLBoard from "./class/HTMLBoard";

export const init = (): void => {
  const board: HTMLBoard = new Board();
  board.init();
};
