import { IGame } from "../types/types";

export const filterByProviders = (game: IGame, providers: number[]) => {
  return providers.includes(game.provider);
};
