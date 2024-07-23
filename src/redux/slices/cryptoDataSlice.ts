import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GECKO_API_KEY } from "../../constants/api";

export interface ICryptoDataState {
  data: Record<string, any>;
  isLoading: boolean;
  error: boolean;
}

const initialState: ICryptoDataState["data"] = {
  data: [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 66465,
      market_cap: 1311229155876,
      market_cap_rank: 1,
      fully_diluted_valuation: 1395754803979,
      total_volume: 32208609804,
      high_24h: 67386,
      low_24h: 64895,
      price_change_24h: 1569.74,
      price_change_percentage_24h: 2.4189,
      market_cap_change_24h: 31001014956,
      market_cap_change_percentage_24h: 2.42152,
      circulating_supply: 19728259,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 73738,
      ath_change_percentage: -9.91102,
      ath_date: "2024-03-14T07:10:36.635Z",
      atl: 67.81,
      atl_change_percentage: 97865.98854,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:33.747Z",
    },
    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
      current_price: 3486.84,
      market_cap: 419322472899,
      market_cap_rank: 2,
      fully_diluted_valuation: 419322472899,
      total_volume: 14864751273,
      high_24h: 3538.41,
      low_24h: 3431.31,
      price_change_24h: 53.88,
      price_change_percentage_24h: 1.56951,
      market_cap_change_24h: 7736992997,
      market_cap_change_percentage_24h: 1.8798,
      circulating_supply: 120226035.250706,
      total_supply: 120226035.250706,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -28.52846,
      ath_date: "2021-11-10T14:24:19.604Z",
      atl: 0.432979,
      atl_change_percentage: 805151.26155,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: {
        times: 69.1293545571144,
        currency: "btc",
        percentage: 6912.935455711439,
      },
      last_updated: "2024-07-20T13:47:26.849Z",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      name: "BNB",
      image:
        "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
      current_price: 589.36,
      market_cap: 90676236322,
      market_cap_rank: 4,
      fully_diluted_valuation: 90676236322,
      total_volume: 1200204985,
      high_24h: 597.88,
      low_24h: 577.33,
      price_change_24h: 12.02,
      price_change_percentage_24h: 2.08241,
      market_cap_change_24h: 1858531538,
      market_cap_change_percentage_24h: 2.09252,
      circulating_supply: 153856150,
      total_supply: 153856150,
      max_supply: 200000000,
      ath: 717.48,
      ath_change_percentage: -17.7536,
      ath_date: "2024-06-06T14:10:59.816Z",
      atl: 0.0398177,
      atl_change_percentage: 1481898.37147,
      atl_date: "2017-10-19T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:31.082Z",
    },
    {
      id: "solana",
      symbol: "sol",
      name: "Solana",
      image:
        "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
      current_price: 167.68,
      market_cap: 77853239474,
      market_cap_rank: 5,
      fully_diluted_valuation: 97340981165,
      total_volume: 2966020237,
      high_24h: 171.53,
      low_24h: 166.2,
      price_change_24h: 1.48,
      price_change_percentage_24h: 0.88921,
      market_cap_change_24h: 1127265173,
      market_cap_change_percentage_24h: 1.46921,
      circulating_supply: 464230227.934943,
      total_supply: 580433469.167155,
      max_supply: null,
      ath: 259.96,
      ath_change_percentage: -35.48797,
      ath_date: "2021-11-06T21:54:35.825Z",
      atl: 0.500801,
      atl_change_percentage: 33387.33702,
      atl_date: "2020-05-11T19:35:23.449Z",
      roi: null,
      last_updated: "2024-07-20T13:47:50.398Z",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
      current_price: 0.588847,
      market_cap: 32949326878,
      market_cap_rank: 8,
      fully_diluted_valuation: 58925936376,
      total_volume: 1921536330,
      high_24h: 0.602492,
      low_24h: 0.555925,
      price_change_24h: 0.0329225,
      price_change_percentage_24h: 5.92211,
      market_cap_change_24h: 1867861494,
      market_cap_change_percentage_24h: 6.00957,
      circulating_supply: 55909481874,
      total_supply: 99987431729,
      max_supply: 100000000000,
      ath: 3.4,
      ath_change_percentage: -82.64776,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl: 0.00268621,
      atl_change_percentage: 21853.15789,
      atl_date: "2014-05-22T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:39.564Z",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
      current_price: 0.428721,
      market_cap: 15268142401,
      market_cap_rank: 11,
      fully_diluted_valuation: 19317363715,
      total_volume: 307470912,
      high_24h: 0.442978,
      low_24h: 0.424498,
      price_change_24h: 0.00422318,
      price_change_percentage_24h: 0.99486,
      market_cap_change_24h: 209410176,
      market_cap_change_percentage_24h: 1.39062,
      circulating_supply: 35567296769.2652,
      total_supply: 45000000000,
      max_supply: 45000000000,
      ath: 3.09,
      ath_change_percentage: -86.06038,
      ath_date: "2021-09-02T06:00:10.474Z",
      atl: 0.01925275,
      atl_change_percentage: 2135.02518,
      atl_date: "2020-03-13T02:22:55.044Z",
      roi: null,
      last_updated: "2024-07-20T13:47:27.327Z",
    },
    {
      id: "chainlink",
      symbol: "link",
      name: "Chainlink",
      image:
        "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
      current_price: 13.91,
      market_cap: 8459386459,
      market_cap_rank: 17,
      fully_diluted_valuation: 13911177205,
      total_volume: 356772770,
      high_24h: 14.22,
      low_24h: 13.61,
      price_change_24h: 0.300173,
      price_change_percentage_24h: 2.20537,
      market_cap_change_24h: 182535175,
      market_cap_change_percentage_24h: 2.20537,
      circulating_supply: 608099971.3083414,
      total_supply: 1000000000,
      max_supply: 1000000000,
      ath: 52.7,
      ath_change_percentage: -73.56794,
      ath_date: "2021-05-10T00:13:57.214Z",
      atl: 0.148183,
      atl_change_percentage: 9299.71435,
      atl_date: "2017-11-29T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:30.291Z",
    },
    {
      id: "bitcoin-cash",
      symbol: "bch",
      name: "Bitcoin Cash",
      image:
        "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
      current_price: 389.81,
      market_cap: 7693122804,
      market_cap_rank: 18,
      fully_diluted_valuation: 8186070466,
      total_volume: 219234592,
      high_24h: 399.89,
      low_24h: 380.45,
      price_change_24h: 9.37,
      price_change_percentage_24h: 2.46197,
      market_cap_change_24h: 178881607,
      market_cap_change_percentage_24h: 2.38057,
      circulating_supply: 19735424.8966508,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 3785.82,
      ath_change_percentage: -89.69487,
      ath_date: "2017-12-20T00:00:00.000Z",
      atl: 76.93,
      atl_change_percentage: 407.09643,
      atl_date: "2018-12-16T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:37.799Z",
    },
    {
      id: "litecoin",
      symbol: "ltc",
      name: "Litecoin",
      image:
        "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
      current_price: 72.67,
      market_cap: 5435603099,
      market_cap_rank: 21,
      fully_diluted_valuation: 6106497072,
      total_volume: 271153004,
      high_24h: 74.08,
      low_24h: 71.41,
      price_change_24h: 1.048,
      price_change_percentage_24h: 1.46346,
      market_cap_change_24h: 105314884,
      market_cap_change_percentage_24h: 1.97578,
      circulating_supply: 74771289.4834713,
      total_supply: 84000000,
      max_supply: 84000000,
      ath: 410.26,
      ath_change_percentage: -82.28684,
      ath_date: "2021-05-10T03:13:07.904Z",
      atl: 1.15,
      atl_change_percentage: 6225.49513,
      atl_date: "2015-01-14T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:27.826Z",
    },
    {
      id: "stellar",
      symbol: "xlm",
      name: "Stellar",
      image:
        "https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
      current_price: 0.104795,
      market_cap: 3073299624,
      market_cap_rank: 33,
      fully_diluted_valuation: 5242608697,
      total_volume: 78283435,
      high_24h: 0.106825,
      low_24h: 0.102678,
      price_change_24h: 0.00184523,
      price_change_percentage_24h: 1.79236,
      market_cap_change_24h: 64207035,
      market_cap_change_percentage_24h: 2.13377,
      circulating_supply: 29311833460.4794,
      total_supply: 50001786959.6824,
      max_supply: 50001786959.6824,
      ath: 0.875563,
      ath_change_percentage: -88.02858,
      ath_date: "2018-01-03T00:00:00.000Z",
      atl: 0.00047612,
      atl_change_percentage: 21914.74833,
      atl_date: "2015-03-05T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:28.310Z",
    },
    {
      id: "monero",
      symbol: "xmr",
      name: "Monero",
      image:
        "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
      current_price: 162.85,
      market_cap: 3003688477,
      market_cap_rank: 34,
      fully_diluted_valuation: null,
      total_volume: 85783814,
      high_24h: 163.2,
      low_24h: 159.76,
      price_change_24h: 3.09,
      price_change_percentage_24h: 1.93293,
      market_cap_change_24h: 63333749,
      market_cap_change_percentage_24h: 2.15395,
      circulating_supply: 18445342.6021475,
      total_supply: 18444108,
      max_supply: null,
      ath: 542.33,
      ath_change_percentage: -69.95952,
      ath_date: "2018-01-09T00:00:00.000Z",
      atl: 0.216177,
      atl_change_percentage: 75262.98643,
      atl_date: "2015-01-14T00:00:00.000Z",
      roi: null,
      last_updated: "2024-07-20T13:47:24.250Z",
    },
  ],
  isLoading: true,
  error: false,
};

interface IFetchGeneralData {
  url: string;
  exchangeCurrency: string;
  currenciesList: string;
}

export interface IGeneraDataItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date: Date;
  last_updated: Date;
  position: string;
}

const getConvertedList = (data: IGeneraDataItem[]) =>
  data.reduce((acc, { symbol, ...restItemProps }) => {
    return { ...acc, [symbol]: { ...restItemProps, symbol } };
  }, {});

export const fetchGeneralData = createAsyncThunk(
  "cryptoData/general",
  async ({ url, exchangeCurrency, currenciesList }: IFetchGeneralData) => {
    const res = await axios({
      method: "get",
      url,
      params: {
        vs_currency: exchangeCurrency,
        ids: currenciesList,
        x_cg_demo_api_key: GECKO_API_KEY,
      },
    });
    const data = await res.data;
    return getConvertedList(data);
  }
);

export const cryptoDataSlice = createSlice({
  name: "cryptoData",
  initialState,
  reducers: {},
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

export default cryptoDataSlice.reducer;
