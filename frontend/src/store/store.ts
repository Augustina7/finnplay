import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameReducer';

const store = configureStore({
  reducer: {
    game: gameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
