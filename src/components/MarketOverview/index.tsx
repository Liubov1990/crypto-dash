import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
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
import { limitNumberValue, promisifiedDelay } from "../../utils";
import moment, { Moment } from "moment";
import useResizeObserver from "use-resize-observer";
import * as S from "./styled";
import { getVictoryStyles } from "../../helpers/getVictoryStyles";
import { useAppSelector } from "../../hooks/use-store";
import { OVERVIEW_TIME_RANGES, PALLETE } from "../../constants/charts";
import { getMarketOverview } from "../../api";

const VictoryCursorVoronoiContainer = createContainer(
  "voronoi",
  "cursor"
) as React.ComponentType<any>;

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

function MarketOverview(): React.ReactElement {
  const styles = getVictoryStyles();
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { currenciesList, exchangeCurrency } = useAppSelector(
    (state) => state.config
  );
  const [marketData, setMarketData] = useState<
    Record<string, IMarketOverviewItem[]>
  >({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedRange, setSelectedRange] = useState(
    OVERVIEW_TIME_RANGES[0].value
  );

  const marketDataLength = useMemo(
    () => Object.getOwnPropertyNames(marketData).length,
    [marketData]
  );

  const getMarketOverviewData = async (coinId: string) => {
    setError(false);
    setLoading(true);

    try {
      const marketOverviewData = await getMarketOverview({
        fromCurrency: coinId,
        toCurrency: exchangeCurrency.id,
        timeRange: selectedRange,
      });
      setMarketData((prevData) => ({ ...prevData, ...marketOverviewData }));
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMarketsOverviewData = async () => {
    setLoading(true);
    for await (const _res of currenciesList.map(({ symbol }) =>
      promisifiedDelay(500).then(() => {
        getMarketOverviewData(symbol);
      })
    )) {
    }
    setLoading(false);
  };

  const getMockOverview = async () => {
    setLoading(true);
    await promisifiedDelay(500);
    setMarketData({
      ETH: [
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
      BTC: [
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
    // getMarketsOverviewData();
  }, [selectedRange]);

  return (
    <S.MarketOverviewContainer ref={ref}>
      {!!marketDataLength && (
        <>
          <S.MarketOptionsBar>
            <S.MarketSelect
              value={selectedRange}
              onChange={handleRangeSelection}
            >
              {OVERVIEW_TIME_RANGES.map(({ value, label }) => (
                <S.MarketOption key={value} value={value}>
                  {label}
                </S.MarketOption>
              ))}
            </S.MarketSelect>
          </S.MarketOptionsBar>
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
                  style={styles.chartMT}
                  cursorDimension="x"
                  voronoiDimension="x"
                  labelComponent={
                    <VictoryTooltip
                      flyoutWidth={150}
                      centerOffset={{ x: 80, y: 10 }}
                      constrainToVisibleArea
                      dy={-50}
                      flyoutStyle={styles.flyoutTooltipStyle}
                    />
                  }
                  labels={({ datum }: Datum) => {
                    const currInfo = Object.entries(marketData).find(
                      ([_, data]) => {
                        return data.find(({ y }) => y === datum.y);
                      }
                    );
                    return `${currInfo?.[0].toLocaleUpperCase()}: ${
                      exchangeCurrency.symbol
                    }${datum.y}`;
                  }}
                />
              }
            >
              <VictoryAxis style={styles.axisMain} />
              <VictoryAxis
                dependentAxis
                style={styles.axisDependent}
                tickFormat={limitNumberValue}
              />
              {Object.entries(marketData).map(([id, data], index) => (
                <VictoryLine
                  key={id}
                  interpolation="basis"
                  style={{
                    data: { stroke: PALLETE[index] || "#c43a31" },
                    labels: {
                      fill: PALLETE[index] || "#c43a31",
                    },
                  }}
                  data={data}
                />
              ))}
            </VictoryChart>
          )}
          {loading && <Disabler />}
        </>
      )}
      {!marketDataLength && !error && <div>Loading...</div>}
      {!loading && error && <div>Data is currently unavailable!</div>}
    </S.MarketOverviewContainer>
  );
}

export default MarketOverview;
