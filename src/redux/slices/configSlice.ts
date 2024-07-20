import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  currenciesList: Record<string, string>[];
  exchangeCurrency: string;
}

const initialState: IAuthState = {
  currenciesList: [
    {
      id: "bitcoin",
      symbol: "BTC",
    },
    {
      id: "ethereum",
      symbol: "ETC",
    },
    {
      id: "ripple",
      symbol: "XRP",
    },
    {
      id: "bitcoin-cash",
      symbol: "BCH",
    },
    {
      id: "chainlink",
      symbol: "LINK",
    },
    {
      id: "litecoin",
      symbol: "LTC",
    },
    {
      id: "cardano",
      symbol: "ADA",
    },
    {
      id: "binancecoin",
      symbol: "BNB",
    },
    {
      id: "stellar",
      symbol: "XLM",
    },
    {
      id: "monero",
      symbol: "XMR",
    },
    {
      id: "solana",
      symol: "SOL",
    },
  ],
  exchangeCurrency: "USD",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCurrenciesList: (
      state,
      action: PayloadAction<IAuthState["currenciesList"]>
    ) => {
      state.currenciesList = action.payload;
    },
    setExchangeCurrency: (state, action: PayloadAction<string>) => {
      state.exchangeCurrency = action.payload;
    },
  },
});

export const { setCurrenciesList, setExchangeCurrency } = configSlice.actions;

export default configSlice.reducer;
