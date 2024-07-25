import {
  ChangeEvent,
  ComponentType,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Moment } from "moment";
import {
  createContainer,
  Datum,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import useResizeObserver from "use-resize-observer";
import {
  formatChartTicks,
  formatFullDate,
  promisifiedDelay,
} from "../../utils";
import { useAppSelector } from "../../hooks/use-store";
import {
  OVERVIEW_TIME_RANGES,
  PALLETE,
  REFRESH_CHART_INTERVAL,
} from "../../constants/charts";
import { getMarketDailyOverview } from "../../api";
import { MARKET_OVERVIEW_DAILY_MOCK } from "../../mocks/market-overview";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { getVictoryStyles } from "../../helpers/getVictoryStyles";
import * as S from "./styled";

const VictoryCursorVoronoiContainer = createContainer(
  "voronoi",
  "cursor"
) as ComponentType<any>;

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

function MarketOverview(): ReactNode {
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

  const RED = "#c43a31";

  const isContent = !error && !loading && !!marketDataLength;
  const isError = !loading && error;

  const getMarketOverviewData = async (coinId: string) => {
    setError(false);
    setLoading(true);

    try {
      const marketOverviewData = await getMarketDailyOverview({
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
    setMarketData(MARKET_OVERVIEW_DAILY_MOCK);
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

    const interval = setInterval(() => {
      getMockOverview();
      // getMarketsOverviewData();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [selectedRange]);

  return (
    <S.MarketOverviewContainer ref={ref}>
      <S.MarketOptionsBar>
        <S.MarketSelect value={selectedRange} onChange={handleRangeSelection}>
          {OVERVIEW_TIME_RANGES.map(({ value, label }) => (
            <S.MarketOption key={value} value={value}>
              {label}
            </S.MarketOption>
          ))}
        </S.MarketSelect>
      </S.MarketOptionsBar>
      {isContent && (
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
                }${datum.y} (${formatFullDate(datum.x)})`;
              }}
            />
          }
        >
          <VictoryAxis style={styles.axisMain} />
          <VictoryAxis
            dependentAxis
            style={styles.axisDependent}
            tickFormat={formatChartTicks}
          />
          {Object.entries(marketData).map(([id, data], index) => (
            <VictoryLine
              key={id}
              interpolation="basis"
              style={{
                data: { stroke: PALLETE[index] || RED },
                labels: {
                  fill: PALLETE[index] || RED,
                },
              }}
              data={data}
            />
          ))}
        </VictoryChart>
      )}
      {loading && <Loader height={`${height}px`} />}
      {isError && <ErrorMessage />}
    </S.MarketOverviewContainer>
  );
}

export default MarketOverview;
