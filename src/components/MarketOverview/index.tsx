import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  createContainer,
  Datum,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import Disabler from "../Disabler";
import { convertMarketOverviewData, promisifiedDelay } from "../../utils";
import moment, { Moment } from "moment";
import useResizeObserver from "use-resize-observer";

const VictoryCursorVoronoiContainer = createContainer(
  "voronoi",
  "cursor"
) as React.ComponentType<any>;

const API_URL = "https://min-api.cryptocompare.com/data/v2/histoday";
const API_KEY = "";
const CURRENCIES_IDS = [
  "btc",
  "eth",
  "xrp",
  "bch",
  "link",
  "ltc",
  "ada",
  "bnb",
  "xlm",
  "xmr",
  "sol",
];
const PALLETE = [
  "#7517F8",
  "#E323FF",
  "#4DFFDF",
  "#4DA1FF",
  "#F5AC6E",
  "#60B7FF",
  "#007AFF",
  "#e9d4ff",
  "#d2e031",
  "#68822a",
  "#f9d637",
  "#48174d",
];

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

function MarketOverview(): React.ReactElement {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const [marketData, setMarketData] = useState<
    Record<string, IMarketOverviewItem[]>
  >({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedRange, setSelectedRange] = useState("7");

  const marketDataLength = useMemo(
    () => Object.getOwnPropertyNames(marketData).length,
    [marketData]
  );

  const getMarketOverview = async (coinId: string) => {
    setError(false);
    setLoading(true);

    try {
      const {
        data: {
          Data: { Data },
        },
      }: any = await axios({
        method: "get",
        url: API_URL,
        params: {
          api_key: API_KEY,
          fsym: coinId,
          tsym: "USD",
          aggregate: 1,
          limit: selectedRange,
        },
      });
      const preparedData = { [coinId]: convertMarketOverviewData(Data) };
      setMarketData((prevData) => ({ ...prevData, ...preparedData }));
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMarketsOverview = async () => {
    setLoading(true);
    for await (const _res of CURRENCIES_IDS.map((id) =>
      promisifiedDelay(1000).then(() => {
        getMarketOverview(id);
      })
    )) {
    }
    setLoading(false);
  };

  const getMockOverview = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    setMarketData({
      eth: [
        {
          x: moment("2024-07-11T00:00:00.000Z"),
          y: 3099.49,
        },
        {
          x: moment("2024-07-12T00:00:00.000Z"),
          y: 3134.62,
        },
        {
          x: moment("2024-07-13T00:00:00.000Z"),
          y: 3176.67,
        },
        {
          x: moment("2024-07-14T00:00:00.000Z"),
          y: 3246.12,
        },
        {
          x: moment("2024-07-15T00:00:00.000Z"),
          y: 3485.5,
        },
        {
          x: moment("2024-07-16T00:00:00.000Z"),
          y: 3446.19,
        },
        {
          x: moment("2024-07-17T00:00:00.000Z"),
          y: 3387.66,
        },
        {
          x: moment("2024-07-18T00:00:00.000Z"),
          y: 3399.69,
        },
      ],
      btc: [
        {
          x: moment("2024-07-11T00:00:00.000Z"),
          y: 57348.75,
        },
        {
          x: moment("2024-07-12T00:00:00.000Z"),
          y: 57913.68,
        },
        {
          x: moment("2024-07-13T00:00:00.000Z"),
          y: 59231.06,
        },
        {
          x: moment("2024-07-14T00:00:00.000Z"),
          y: 60818.77,
        },
        {
          x: moment("2024-07-15T00:00:00.000Z"),
          y: 64765.55,
        },
        {
          x: moment("2024-07-16T00:00:00.000Z"),
          y: 65087.61,
        },
        {
          x: moment("2024-07-17T00:00:00.000Z"),
          y: 64096.64,
        },
        {
          x: moment("2024-07-18T00:00:00.000Z"),
          y: 63555.09,
        },
      ],
    });
    setLoading(false);
  };

  const handleRangeSelection = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(value);
  };

  useEffect(() => {
    getMockOverview();
    // getMarketsOverview();
  }, [selectedRange]);

  return (
    <div ref={ref} style={{ height: "100%", paddingLeft: 10 }}>
      {!!marketDataLength && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <select value={selectedRange} onChange={handleRangeSelection}>
              <option value={"7"}>Weekly</option>
              <option value={"30"}>Monthly</option>
              <option value={"90"}>Quarterly</option>
            </select>
          </div>
          {!error && (
            <VictoryChart
              key={selectedRange}
              theme={VictoryTheme.material}
              domainPadding={{ x: 50, y: 10 }}
              scale={{ x: "time" }}
              width={width}
              height={height}
              containerComponent={
                <VictoryCursorVoronoiContainer
                  cursorDimension="x"
                  voronoiDimension="x"
                  labelComponent={
                    <VictoryTooltip
                      flyoutWidth={150}
                      centerOffset={{ x: 80 }}
                      style={{ fill: "white", fontSize: 16 }}
                      constrainToVisibleArea
                      dy={-50}
                      flyoutStyle={{
                        fill: "rgba(52, 52, 52, 0.8)",
                      }}
                    />
                  }
                  labels={({ datum }: Datum) => {
                    const currInfo = Object.entries(marketData).find(
                      ([_, data]) => {
                        return data.find(({ y }) => y === datum.y);
                      }
                    );
                    return `${currInfo?.[0].toLocaleUpperCase()}: ${datum.y}`;
                  }}
                />
              }
            >
              <VictoryAxis
                style={{
                  grid: { stroke: 0 },
                }}
              />
              <VictoryAxis dependentAxis />
              {Object.entries(marketData).map(([id, data], index) => (
                <VictoryLine
                  key={id}
                  interpolation="basis"
                  style={{
                    data: { stroke: PALLETE[index] || "#c43a31" },
                  }}
                  data={data}
                />
              ))}
            </VictoryChart>
          )}
          {error && <div>Data is currently unavailable</div>}
          {loading && <Disabler />}
        </>
      )}
      {!marketDataLength && <div>Loading...</div>}
    </div>
  );
}

export default MarketOverview;
