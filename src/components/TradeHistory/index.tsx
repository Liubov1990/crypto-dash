import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
} from "victory";
import cn from "classnames";
import {
  convertChartHistoryData,
  limitNumberValue,
  promisifiedDelay,
} from "../../utils";
import { getVictoryStyles } from "../../helpers/getVictoryStyles";
import * as S from "./styled";
import { useAppSelector } from "../../hooks/use-store";
import { getTradeHistory } from "../../api";
import { TRADE_TIME_RANGES } from "../../constants/charts";
import Loader from "../Loader";

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
            <div>
              <S.TradeSelect
                value={selectedCoin}
                onChange={handleCoinSelection}
              >
                {currenciesList.map(({ id, symbol }) => (
                  <S.TradeOption key={id} value={id}>
                    {symbol}/{exchangeCurrency.id}
                  </S.TradeOption>
                ))}
              </S.TradeSelect>
            </div>
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
              <VictoryAxis
                dependentAxis
                style={styles.axisDependent}
                tickFormat={limitNumberValue}
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
          {error && <div>Data is currently unavailable!</div>}
          {loading && <Loader />}
        </>
      )}
      {!historyData.length && <Loader />}
    </S.TradeHistoryContainer>
  );
}

export default TradeHistory;
