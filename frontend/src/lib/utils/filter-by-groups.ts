import { IGame, IGroup } from "../types/types";

export const filterByGroups = (
  game: IGame,
  groups: IGroup[],
  groupsIds: number[]
) => {
  return groupsIds.some((groupId) =>
    groups.find((group) => group.id === groupId)?.games.includes(game.id)
  );
};
