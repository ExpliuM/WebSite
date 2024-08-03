import { configureStore } from '@reduxjs/toolkit';
import ticTacToeReducer from '../components/tic-tac-toe/Redux/slice';
import snakeReducer from '../components/snake/Redux/slice';

export const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
    snake: snakeReducer,
  },
});
