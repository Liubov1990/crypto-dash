import moment from "moment";
import { format } from "d3-format";
import { IGeneraDataItem } from "../redux/slices/cryptoDataSlice";
import { FORMATTER_PRICE_PATTERNS } from "../constants/config";

export const promisifiedDelay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const convertChartHistoryData = (rawData: Array<number[]>) =>
  rawData.map(([x, open, high, low, close]) => ({ x, open, high, low, close }));

export const convertMarketOverviewData = (
  rawData: Array<{ time: number; close: number }>
) => rawData.map(({ time, close }) => ({ x: moment.unix(time), y: close }));

export const convertGeneralCryptoData = (data: IGeneraDataItem[]) =>
  data.reduce((acc, { symbol, ...restItemProps }) => {
    return { ...acc, [symbol]: { ...restItemProps, symbol } };
  }, {});

export const formatChartTicks = (value: number) => {
  const limitedNumber = value.toPrecision(5);
  return format("~s")(Number(limitedNumber));
};

export const formatPrice = (currency: string, price: number) =>
  format(
    FORMATTER_PRICE_PATTERNS[currency as keyof typeof FORMATTER_PRICE_PATTERNS]
  )(price);

export const formatFullDate = (timestamp: string) =>
  moment(timestamp).format("MMMM Do YYYY");
