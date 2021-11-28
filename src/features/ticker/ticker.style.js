import styled from "styled-components";
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 40rem;
  margin-top: 10rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  background-color: #d2e6dd;
  width: auto;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1.2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;

  & > h4 {
    font-size: 2.1rem;
  }
  & > span {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  & > span.red {
    background: red;
  }
  & > span.green {
    background: green;
  }
`;

export const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.2rem;
  border-bottom: 2px solid #bcd5c8;
`;

export const RowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1.2rem;

  div > p {
    font-size: 1.4rem;
  }
`;

export const BitCoinIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  svg {
    padding: 0.4rem;
    background-color: #bcd5c8;
    border-radius: 0.8rem;
    display: inline-block;
    margin-right: 0.8rem;
  }

  div {
    h4 {
      font-size: 1.6rem;
      line-height: 1;
      margin-bottom: 0.4rem;
    }
    p {
      font-size: 1.6rem;
      line-height: 1;
    }
  }
`;

export const BitCoinPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h4 {
    font-size: 1.8rem;
  }

  span {
    font-size: 1.35rem;
    display: flex;
    align-items: center;
  }
  span.red {
    color: #f44336;
  }
  span.green {
    color: green;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  background: #f2f2f2;
  padding: 1.6rem;
  border-radius: 1.2rem;

  button {
    border: none;
    padding: 0.8rem;
    border-radius: 0.8rem;
    cursor: pointer;
    background: #8abfac;
    margin-left: 0.8rem;
  }

  div.connected > button {
    background: #f44336;
    color: #fff;
  }
`;
