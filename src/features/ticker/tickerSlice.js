import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticker: [0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  wsConnected: false,
};

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,

  reducers: {
    tickerConnected: (state, action) => {
      state.ticker = action.payload;
    },
    connectWs: (state) => {
      state.wsConnected = true;
    },
    disconnectWs: (state) => {
      state.wsConnected = false;
    },
  },
});

export const { tickerConnected, connectWs, disconnectWs } = tickerSlice.actions;

export default tickerSlice.reducer;
