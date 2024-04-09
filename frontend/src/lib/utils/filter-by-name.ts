import { IGame } from "../types/types";

export const filterByName = (game: IGame, searchName: string) => {
  return game.name.toLowerCase().includes(searchName.toLowerCase());
};