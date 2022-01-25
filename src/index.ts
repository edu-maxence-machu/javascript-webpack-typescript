import "./styles/main.scss";
import "./index.ts";
import HTMLBoard from "./class/HTMLBoard";

export const init = (): void => {
  const board: HTMLBoard = new HTMLBoard();
  board.init();
};

init();
