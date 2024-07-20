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
import Disabler from "../Disabler";
import { convertChartHistoryData, promisifiedDelay } from "../../utils";

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
    <div ref={ref} style={{ height: "100%", padding: 10 }}>
      {!!historyData.length && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <select value={selectedCoin} onChange={handleCoinSelection}>
              <option value="bitcoin">BTC/USD</option>
              <option value="ethereum">ETH/USD</option>
            </select>
            <div>
              {TIME_RANGES.map(({ value, label }) => (
                <button
                  key={value}
                  value={value}
                  style={{
                    margin: "0 5px",
                    ...(selectedRange === value && { background: "violet" }),
                  }}
                  onClick={handleRangeSelection}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
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
              domainPadding={{ x: 100 }}
              scale={{ x: "time" }}
              width={width}
              height={height}
              containerComponent={<VictoryZoomContainer />}
            >
              <VictoryAxis
                style={{
                  grid: { stroke: 0 },
                }}
              />
              <VictoryAxis dependentAxis />
              <VictoryCandlestick
                style={{
                  data: {
                    fillOpacity: 0.7,
                    stroke: "#2D2346",
                    strokeWidth: 1,
                  },
                }}
                candleColors={{
                  positive: "url(#positiveGradient)",
                  negative: "url(#negativeGradient)",
                }}
                data={historyData}
              />
            </VictoryChart>
          )}
          {error && <div>Data is currently unavailable</div>}
          {loading && <Disabler />}
        </>
      )}
      {!historyData.length && <div>Loading...</div>}
    </div>
  );
}

export default TradeHistory;
