import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from "react";
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from "victory";
import useResizeObserver from "use-resize-observer";
import cn from "classnames";
import {
  convertChartHistoryData,
  formatChartTicks,
  promisifiedDelay,
} from "../../utils";
import { useAppSelector } from "../../hooks/use-store";
import { getTradeHistory } from "../../api";
import {
  REFRESH_CHART_INTERVAL,
  TRADE_TIME_RANGES,
} from "../../constants/charts";
import { TRADE_HISTORY_MOCK } from "../../mocks/trade-history";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import { getVictoryStyles } from "../../helpers/getVictoryStyles";
import * as S from "./styled";

interface IHistoryItem {
  x: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

function TradeHistory(): ReactNode {
  const styles = getVictoryStyles();
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { currenciesList, exchangeCurrency } = useAppSelector(
    (state) => state.config
  );
  const [historyData, setHistoryData] = useState<IHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(currenciesList[0].id);
  const [selectedRange, setSelectedRange] = useState(
    TRADE_TIME_RANGES[0].value
  );

  const isContent = !error && !loading && !!historyData.length;
  //@ts-ignore
  const getHistory = async () => {
    setError(false);
    setLoading(true);

    try {
      const historyData = await getTradeHistory({
        fromCurrency: selectedCoin,
        toCurrency: exchangeCurrency.id,
        timeRange: selectedRange,
      });
      setHistoryData(historyData);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };
  // @ts-ignore
  const getMockHistory = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    const mockedData = convertChartHistoryData(TRADE_HISTORY_MOCK);
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
    // getMockHistory();
    getHistory();

    const interval = setInterval(() => {
      // getMockHistory();
      getHistory();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [selectedCoin, selectedRange]);

  return (
    <S.TradeHistoryContainer ref={ref}>
      <S.TradeHistoryOptionsBar>
        <S.TradeSelect
          value={selectedCoin}
          onChange={handleCoinSelection}
          aria-label="Coin to currency"
        >
          {currenciesList.map(({ id, symbol }) => (
            <S.TradeOption key={id} value={id}>
              {symbol}/{exchangeCurrency.id}
            </S.TradeOption>
          ))}
        </S.TradeSelect>
        <S.ChartBtnGroup>
          {TRADE_TIME_RANGES.map(({ value, label }) => (
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
      {isContent && (
        <VictoryChart
          key={`${selectedCoin}-${selectedRange}`}
          theme={VictoryTheme.material}
          domainPadding={{ x: width < 600 ? 40 : 110 }}
          scale={{ x: "time" }}
          width={width}
          height={height}
          containerComponent={<VictoryZoomContainer style={styles.chartMT} />}
        >
          <VictoryAxis style={styles.axisMain} />
          <VictoryAxis
            dependentAxis
            style={styles.axisDependent}
            tickFormat={formatChartTicks}
          />
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
      {loading && <Loader height={`${height}px`} />}
      {error && <ErrorMessage />}
    </S.TradeHistoryContainer>
  );
}

export default TradeHistory;
