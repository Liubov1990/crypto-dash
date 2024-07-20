import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  EXCHANGE_CURRENCIES_LIST,
  CRYPTO_CURRENCIES_LIST,
} from "../../constants/currencies";

export interface IAuthState {
  currenciesList: Record<string, string>[];
  exchangeCurrency: Record<string, string>;
}

const initialState: IAuthState = {
  currenciesList: CRYPTO_CURRENCIES_LIST.slice(0, 6),
  exchangeCurrency: EXCHANGE_CURRENCIES_LIST.USD,
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
    setExchangeCurrency: (
      state,
      action: PayloadAction<IAuthState["exchangeCurrency"]>
    ) => {
      state.exchangeCurrency = action.payload;
    },
    resetConfig: () => initialState,
  },
});

export const { setCurrenciesList, setExchangeCurrency, resetConfig } =
  configSlice.actions;

export default configSlice.reducer;
