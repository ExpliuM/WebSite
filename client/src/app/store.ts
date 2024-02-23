import { configureStore } from '@reduxjs/toolkit';
import reducer from '../components/tic-tac-toe/Redux/slice';

export const store = configureStore({
  reducer: {
    ticTacToe: reducer,
  },
});
 