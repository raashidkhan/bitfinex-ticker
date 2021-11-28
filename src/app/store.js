import { configureStore } from "@reduxjs/toolkit";
import tickerReducer from "../features/ticker/tickerSlice";

export const store = configureStore({
  reducer: {
    ticker: tickerReducer,
  },
});
