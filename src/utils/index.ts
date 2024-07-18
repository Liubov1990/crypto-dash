import moment from "moment";

export const promisifiedDelay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const convertChartHistoryData = (rawData: Array<number[]>) =>
  rawData.map(([x, open, high, low, close]) => ({ x, open, high, low, close }));

export const convertMarketOverviewData = (
  rawData: Array<{ time: number; close: number }>
) => rawData.map(({ time, close }) => ({ x: moment.unix(time), y: close }));
