import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import useResizeObserver from "use-resize-observer";
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from "victory";
import cn from "classnames";
import Disabler from "../Disabler";
import { convertChartHistoryData, promisifiedDelay } from "../../utils";
import { getVictoryStyles } from "../../helpers/getVictoryStyles";
import * as S from "./styled";

const API_URL = "https://api.coingecko.com/api/v3/coins/";
const API_KEY = "";

const TIME_RANGES = [
  { value: "1", label: "1D" },
  { value: "7", label: "1W" },
  { value: "30", label: "1M" },
];

interface IHistoryItem {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

function TradeHistory(): React.ReactElement {
  const styles = getVictoryStyles();
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [historyData, setHistoryData] = useState<IHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedRange, setSelectedRange] = useState("7");

  const getHistory = async () => {
    setError(false);
    setLoading(true);

    try {
      const { data } = await axios({
        method: "get",
        url: `${API_URL}/${selectedCoin}/ohlc`,
        params: {
          vs_currency: "usd",
          days: selectedRange,
          x_cg_demo_api_key: API_KEY,
        },
      });
      setHistoryData(convertChartHistoryData(data));
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMockHistory = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    const mockedData = convertChartHistoryData([
      [1709395200000, 61942, 62211, 61721, 61845],
      [1709409600000, 61828, 62139, 61726, 62139],
      [1709424000000, 62171, 62210, 61821, 62068],
    ]);
    setHistoryData(mockedData);
    setLoading(false);
  };

  const handleCoinSelection = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(value);
  };

  const handleRangeSelection = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.target as HTMLButtonElement;
    setSelectedRange(value);
  };

  useEffect(() => {
    getMockHistory();
    // getHistory();
  }, [selectedCoin, selectedRange]);

  return (
    <S.TradeHistoryContainer ref={ref}>
      {!!historyData.length && (
        <>
          <S.TradeHistoryOptionsBar>
            <select value={selectedCoin} onChange={handleCoinSelection}>
              <option value="bitcoin">BTC/USD</option>
              <option value="ethereum">ETH/USD</option>
            </select>
            <S.ChartBtnGroup>
              {TIME_RANGES.map(({ value, label }) => (
                <S.ChartButton
                  key={value}
                  value={value}
                  className={cn({
                    active: selectedRange === value,
                  })}
                  onClick={handleRangeSelection}
                >
                  {label}
                </S.ChartButton>
              ))}
            </S.ChartBtnGroup>
          </S.TradeHistoryOptionsBar>
          <svg style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="positiveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4DFFDF" />
                <stop offset="100%" stopColor="#4DA1FF" />
              </linearGradient>
              <linearGradient
                id="negativeGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E323FF" />
                <stop offset="100%" stopColor="#7517F8" />
              </linearGradient>
            </defs>
          </svg>
          {!error && (
            <VictoryChart
              key={`${selectedCoin}-${selectedRange}`}
              theme={VictoryTheme.material}
              domainPadding={{ x: 110 }}
              scale={{ x: "time" }}
              width={width}
              height={height}
              containerComponent={
                <VictoryZoomContainer style={styles.chartMT} />
              }
            >
              <VictoryAxis style={styles.axisMain} />
              <VictoryAxis dependentAxis style={styles.axisDependent} />
              <VictoryCandlestick
                style={styles.candleStick}
                candleColors={{
                  positive: "url(#positiveGradient)",
                  negative: "url(#negativeGradient)",
                }}
                data={historyData}
              />
            </VictoryChart>
          )}
          {error && <div>Data is currently unavailable!</div>}
          {loading && <Disabler />}
        </>
      )}
      {!historyData.length && <div>Loading...</div>}
    </S.TradeHistoryContainer>
  );
}

export default TradeHistory;
