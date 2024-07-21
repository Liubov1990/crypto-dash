import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  EXCHANGE_CURRENCIES_LIST,
  CRYPTO_CURRENCIES_LIST,
} from "../../constants/currencies";
import { ThemeEnum } from "../../context/ThemeContext";

export interface IConfigState {
  currenciesList: Record<string, string>[];
  exchangeCurrency: Record<string, string>;
  theme: ThemeEnum;
  serializedDockbox: string | null;
  persistentDockbox: boolean;
}

const initialState: IConfigState = {
  currenciesList: CRYPTO_CURRENCIES_LIST.slice(0, 6),
  exchangeCurrency: EXCHANGE_CURRENCIES_LIST.USD,
  theme: ThemeEnum.DARK,
  serializedDockbox: null,
  persistentDockbox: false,
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setCurrenciesList: (
      state,
      action: PayloadAction<IConfigState["currenciesList"]>
    ) => {
      state.currenciesList = action.payload;
    },
    setExchangeCurrency: (
      state,
      action: PayloadAction<IConfigState["exchangeCurrency"]>
    ) => {
      state.exchangeCurrency = action.payload;
    },
    setTheme: (state, action: PayloadAction<IConfigState["theme"]>) => {
      state.theme = action.payload;
    },
    setSerializedDockbox: (
      state,
      action: PayloadAction<IConfigState["serializedDockbox"]>
    ) => {
      state.serializedDockbox = action.payload;
    },
    setPersistentDocbox: (
      state,
      action: PayloadAction<IConfigState["persistentDockbox"]>
    ) => {
      state.persistentDockbox = action.payload;
    },
    resetConfig: () => initialState,
  },
});

export const {
  setCurrenciesList,
  setExchangeCurrency,
  setTheme,
  setSerializedDockbox,
  setPersistentDocbox,
  resetConfig,
} = configSlice.actions;

export default configSlice.reducer;
