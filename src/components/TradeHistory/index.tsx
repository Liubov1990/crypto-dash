import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParentSize } from "@cutting/use-get-parent-size";
import axios from "axios";
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

interface IHistoryItem {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

function TradeHistory(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef);
  const [historyData, setHistoryData] = useState<IHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedValues, setSelectedValues] = useState({
    coin: "bitcoin",
    range: 7,
  });

  const getHistory = async () => {
    setError(false);
    setLoading(true);

    try {
      const { coin, range } = selectedValues;
      const { data } = await axios({
        method: "get",
        url: `${API_URL}/${coin}/ohlc`,
        params: {
          vs_currency: "usd",
          days: range,
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

  const handleSelect = ({
    target: { id, value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  useEffect(() => {
    getMockHistory();
    // getHistory();
  }, [selectedValues]);

  return (
    <div ref={containerRef} style={{ height: "100%", padding: 10 }}>
      {!!historyData.length && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <select
              id="coin"
              value={selectedValues.coin}
              onChange={handleSelect}
            >
              <option value="bitcoin">BTC</option>
              <option value="ethereum">ETH</option>
            </select>
            <select
              id="range"
              value={selectedValues.range}
              onChange={handleSelect}
            >
              <option value={1}>1D</option>
              <option value={7}>1W</option>
              <option value={30}>1M</option>
            </select>
          </div>
          {!error && (
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={{ x: 100 }}
              scale={{ x: "time" }}
              width={Number(width) - 20}
              height={Number(height) - 10}
              containerComponent={<VictoryZoomContainer />}
            >
              <VictoryAxis />
              <VictoryAxis dependentAxis />
              <VictoryCandlestick
                candleColors={{ positive: "#5f5c5b", negative: "#E323FF" }}
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
