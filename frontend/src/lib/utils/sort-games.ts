import { IFilter, IGame } from "../types/types";

export const sortGames = (filter: IFilter, a: IGame, b: IGame) => {
    switch (filter.sort) {
    case "A-Z":
      return a.name.localeCompare(b.name);
    case "Z-A":
      return b.name.localeCompare(a.name);
    case "Newest":
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    default:
      return 0;
  }
};
