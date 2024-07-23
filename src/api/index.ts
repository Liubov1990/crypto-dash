import axios from "axios";
import {
  COMPARE_API_KEY,
  COMPARE_HISTODAY_URL,
  COMPARE_HISTOHOUR_URL,
  GECKO_API_KEY,
  GECKO_API_URL,
  GECKO_MARKETS_URL,
} from "../constants/api";
import { convertChartHistoryData, convertMarketOverviewData } from "../utils";

interface IGetTradeHistory {
  fromCurrency: string;
  toCurrency: string;
  timeRange: string;
}

export const getTradeHistory = async ({
  fromCurrency,
  toCurrency,
  timeRange,
}: IGetTradeHistory) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${GECKO_API_URL}/${fromCurrency}/ohlc`,
      params: {
        vs_currency: toCurrency,
        days: timeRange,
        x_cg_demo_api_key: GECKO_API_KEY,
      },
    });
    return convertChartHistoryData(data);
  } catch (e) {
    throw new Error(`API Server error`);
  }
};

interface IGetMarketDailyOverview {
  fromCurrency: string;
  toCurrency: string;
  timeRange: string;
}

export const getMarketDailyOverview = async ({
  fromCurrency,
  toCurrency,
  timeRange,
}: IGetMarketDailyOverview) => {
  try {
    const {
      data: {
        Data: { Data },
      },
    }: any = await axios({
      method: "get",
      url: COMPARE_HISTODAY_URL,
      params: {
        api_key: COMPARE_API_KEY,
        fsym: fromCurrency,
        tsym: toCurrency,
        aggregate: 1,
        limit: timeRange,
      },
    });
    return { [fromCurrency]: convertMarketOverviewData(Data) };
  } catch (e) {
    throw new Error(`API Server error`);
  }
};

interface IGetMarketHourlyOverview {
  fromCurrency: string;
  toCurrency: string;
}

export const getMarketHourlyOverview = async ({
  fromCurrency,
  toCurrency,
}: IGetMarketHourlyOverview) => {
  try {
    const {
      data: {
        Data: { Data },
      },
    } = await axios({
      method: "get",
      url: COMPARE_HISTOHOUR_URL,
      params: {
        api_key: COMPARE_API_KEY,
        fsym: fromCurrency,
        tsym: toCurrency,
        aggregate: 1,
        limit: 12,
      },
    });

    return convertMarketOverviewData(Data);
  } catch (e) {
    throw new Error(`API Server error`);
  }
};

export interface IGetTrends {
  fromCurrencies: string;
  toCurrency: string;
}

export const getTrends = async ({ toCurrency, fromCurrencies }: IGetTrends) => {
  try {
    const { data } = await axios({
      method: "get",
      url: GECKO_MARKETS_URL,
      params: {
        vs_currency: toCurrency,
        ids: fromCurrencies,
        x_cg_demo_api_key: GECKO_API_KEY,
      },
    });
    return data;
  } catch (e) {
    throw new Error(`API Server error`);
  }
};
