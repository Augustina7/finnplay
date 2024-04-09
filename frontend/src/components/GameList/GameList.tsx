import { useSelector, useDispatch } from "react-redux";
import { IData } from "../../lib/types/types";
import { filterByGroups } from "../../lib/utils/filter-by-groups";
import { filterByName } from "../../lib/utils/filter-by-name";
import { filterByProviders } from "../../lib/utils/filter-by-providers";
import { sortGames } from "../../lib/utils/sort-games";
import {
  selectFilter,
  selectGames,
  setGames,
  setGamesAmount,
} from "../../store/gameReducer";
import { useContext, useEffect } from "react";
import { ColumnsContext } from "../../context/ColumnsProvider";
import { getColumnClass } from "../../lib/utils/get-column-class";

const GameList = (props: { data: IData }) => {
  const dispatch = useDispatch();
  const games = useSelector(selectGames);
  const filter = useSelector(selectFilter);
  const groups = props.data.groups;
  const { columns } = useContext(ColumnsContext);

  useEffect(() => {
    dispatch(setGames(props.data.games));
  }, [dispatch, props.data.games]);

  const filteredGames = games
    .filter(
      (game) =>
        filterByName(game, filter.name) &&
        (filter.providers.length === 0 ||
          filterByProviders(game, filter.providers)) &&
        (filter.groups.length === 0 ||
          filterByGroups(game, groups, filter.groups))
    )
    .sort((a, b) => sortGames(filter, a, b));

  useEffect(() => {
    dispatch(setGamesAmount(filteredGames.length));
  }, [dispatch, filteredGames]);

  const columnClassName = getColumnClass(columns);

  return (
    <div
      className={`gamesContainer ${columnClassName}`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {filteredGames.length < 1 ? (
        <p>No games found</p>
      ) : (
        filteredGames.map((game) => (
          <img src={game.cover} alt="Game cover" key={game.id} />
        ))
      )}
    </div>
  );
};

export default GameList;
