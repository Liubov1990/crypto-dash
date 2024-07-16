export const promisifiedDelay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const convertChartHistoryData = (rawData: Array<number[]>) =>
  rawData.map(([x, open, high, low, close]) => ({ x, open, high, low, close }));
