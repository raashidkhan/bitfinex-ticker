/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoLogoBitcoin } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
//Utils
import { numberWithCommas } from "../../app/utils";
//Styles
import {
  BitCoinIcon,
  BitCoinPrice,
  ButtonWrap,
  Container,
  Header,
  Main,
  RowOne,
  RowTwo,
} from "./ticker.style";
//Store
import { connectWs, disconnectWs, tickerConnected } from "./tickerSlice";

const Ticker = () => {
  const dispatch = useDispatch();
  const intialTicker = useSelector((state) => state.ticker.ticker);
  const isConnected = useSelector((state) => state.ticker.wsConnected);

  const ws = useRef();
  if (!ws.current) {
    ws.current = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  }

  const [
    CHANNEL_ID,
    [
      BID,
      BID_SIZE,
      ASK,
      ASK_SIZE,
      DAILY_CHANGE,
      DAILY_CHANGE_PERC,
      LAST_PRICE,
      VOLUME,
      HIGH,
      LOW,
    ],
  ] = intialTicker;

  useEffect(() => {
    ws.current.onopen = () => {
      console.log("WS open");
      dispatch(connectWs());

      ws.current.send(
        JSON.stringify({
          event: "subscribe",
          channel: "ticker",
          symbol: "tBTCUSD",
        })
      );
    };
    ws.current.onmessage = function (event) {
      let msg = event.data;
      msg = JSON.parse(msg);
      Array.isArray(msg[1]) && dispatch(tickerConnected(msg));
    };

    ws.current.onclose = () => {
      console.log("WS Closed");
      ws.current.close();
      dispatch(disconnectWs());
    };
  }, [isConnected, dispatch]);

  const wsSub = () => {
    if (ws.current.readyState === 3) {
      ws.current = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
      dispatch(connectWs());
    }
  };

  const wsClose = () => {
    ws.current.close();
  };

  return (
    <Main>
      <Container>
        <Header>
          <h4>Bitcoin Price </h4>
          <span className={isConnected ? `green` : "red"}></span>
        </Header>
        <RowOne>
          <BitCoinIcon>
            <IoLogoBitcoin />
            <div>
              <h4>BTC/USD</h4>
              <p>Bitcoin</p>
            </div>
          </BitCoinIcon>
          <BitCoinPrice>
            <h4>{LAST_PRICE && numberWithCommas(LAST_PRICE.toFixed(1))}</h4>
            <span className={DAILY_CHANGE_PERC < 0 ? `red` : "green"}>
              {DAILY_CHANGE && numberWithCommas(DAILY_CHANGE.toFixed(2))}
              {DAILY_CHANGE_PERC < 0 ? <FaCaretDown /> : <FaCaretUp />}(
              {DAILY_CHANGE_PERC}%) 1D
            </span>
          </BitCoinPrice>
        </RowOne>

        <RowTwo>
          <div>
            <p>Volume</p>
            <h4>{VOLUME && numberWithCommas(VOLUME.toFixed(2))} BTC</h4>
          </div>
          <div>
            <p>Day High</p>
            <h4>{HIGH && numberWithCommas(HIGH.toFixed(1))}</h4>
          </div>
          <div>
            <p>Day Low</p>
            <h4>{LOW && numberWithCommas(LOW.toFixed(1))}</h4>
          </div>
        </RowTwo>
      </Container>
      <ButtonWrap>
        <p>{isConnected ? "Websocket Connected" : "Websocket Disconnected"}</p>
        <div className={isConnected ? `connected` : "disconnected"}>
          {!isConnected && <button onClick={wsSub}>Connect</button>}
          {isConnected && <button onClick={wsClose}>Disconnect</button>}
        </div>
      </ButtonWrap>
    </Main>
  );
};

export default Ticker;
