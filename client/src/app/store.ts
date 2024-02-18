import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../components/tic-tac-toe/Redux/slice';

export const store = configureStore({
  reducer: {
    ticTacToe: Reducer,
  },
});
