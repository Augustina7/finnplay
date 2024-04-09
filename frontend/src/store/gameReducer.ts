import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, IGame } from "../lib/types/types";
import { RootState } from "./store";

interface GameState {
  games: IGame[];
  filter: IFilter;
  gamesAmount: number;
}

const initialState: GameState = {
  games: [],
  filter: {
    name: "",
    providers: [],
    groups: [],
    sort: "",
  },
  gamesAmount: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        name: string;
        providers: number[];
        groups: number[];
        sort: string;
      }>
    ) => {
      state.filter = action.payload;
    },
    setGames: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
    setGamesAmount: (state, action: PayloadAction<number>) => {
      state.gamesAmount = action.payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
  },
});

export const { setFilter, setGames, setGamesAmount, resetFilter } = gameSlice.actions;

export const selectGames = (state: RootState) => state.game.games;
export const selectFilter = (state: RootState) => state.game.filter;
export const selectGamesAmount = (state: RootState) => state.game.gamesAmount;
export const setSort = (state: RootState, action: PayloadAction<string>) => {
  state.game.filter.sort = action.payload;
};

export default gameSlice.reducer;
