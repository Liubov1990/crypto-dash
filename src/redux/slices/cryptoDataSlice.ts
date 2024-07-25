import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTrends, IGetTrends } from "../../api";

export interface ICryptoDataState {
  data: Record<string, any>;
  isLoading: boolean;
  error: boolean;
}

const initialState: ICryptoDataState["data"] = {
  data: [],
  isLoading: true,
  error: false,
};

export interface IGeneralDataItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

export const fetchGeneralData = createAsyncThunk(
  "cryptoData/general",
  async ({ fromCurrencies, toCurrency }: IGetTrends) => {
    return await getTrends({ fromCurrencies, toCurrency });
  }
);

export const cryptoDataSlice = createSlice({
  name: "cryptoData",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IGeneralDataItem[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGeneralData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGeneralData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGeneralData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { setData } = cryptoDataSlice.actions;

export default cryptoDataSlice.reducer;
