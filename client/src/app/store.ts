import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from "../components/tic-tac-toe/Redux/tic-tac-toe-slice";

export const store = configureStore({
  reducer: {
    ticTacToe: ticTacToeReducer,
  },
});
