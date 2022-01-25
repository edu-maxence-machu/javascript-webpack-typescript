import HTMLBoard from "./class/HTMLBoard";

export const init = (): void => {
  const board: HTMLBoard = new HTMLBoard();
  board.init();
};
