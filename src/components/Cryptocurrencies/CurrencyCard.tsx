import { ReactElement, useEffect, useState } from "react";
import { Moment } from "moment";
import useResizeObserver from "use-resize-observer";
import cn from "classnames";
import { VictoryGroup, VictoryLine } from "victory";
import usePrevious from "../../hooks/use-prev";
import {
  convertMarketOverviewData,
  formatPrice,
  promisifiedDelay,
} from "../../utils";
import { IGeneralDataItem } from "../../redux/slices/cryptoDataSlice";
import { useAppSelector } from "../../hooks/use-store";
import { getMarketHourlyOverview } from "../../api";
import { MARKET_OVERVIEW_HOURLY_MOCK } from "../../mocks/market-overview";
import { REFRESH_CHART_INTERVAL } from "../../constants/charts";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import * as S from "./styles/CurrencyCard.styled";

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

interface ICurrencyCardProps extends IGeneralDataItem {
  position: string;
}

function CurrencyCard({
  image,
  symbol,
  current_price,
  position,
}: ICurrencyCardProps): ReactElement {
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();
  const { id } = useAppSelector((state) => state.config.exchangeCurrency);
  const prevPrice = usePrevious(current_price);
  const [marketData, setMarketData] = useState<IMarketOverviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const BLUE_GREEN = "#4DFFDF";
  const VIOLET = "#E323FF";
  const vGroupColor = position === "even" ? BLUE_GREEN : VIOLET;

  const isVictoryGroup = !error && !loading;

  const getDailyOverview = async () => {
    setError(false);
    setLoading(true);

    try {
      const dailyOverviewData = await getMarketHourlyOverview({
        fromCurrency: symbol,
        toCurrency: id,
      });
      setMarketData(dailyOverviewData);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMockOverview = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    setMarketData(convertMarketOverviewData(MARKET_OVERVIEW_HOURLY_MOCK));
    setLoading(false);
  };

  useEffect(() => {
    // getDailyOverview();
    getMockOverview();

    const interval = setInterval(() => {
      // getDailyOverview();
      getMockOverview();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [symbol]);

  return (
    <S.CurrencyCard ref={ref}>
      <S.CoinWrap>
        <img src={image} alt={symbol} width="50" height="50" />
      </S.CoinWrap>
      <S.CoinBar>
        <span>
          {symbol}
          <S.ArrowRightSVG>
            <use xlinkHref="svg/sprite.svg#arrow-right" />
          </S.ArrowRightSVG>
          {id}
        </span>
        {prevPrice && (
          <>
            <S.ArrowCircledSVG
              className={cn({
                up: current_price < prevPrice,
                down: current_price > prevPrice,
              })}
            >
              <use xlinkHref="svg/sprite.svg#circled-arrow" />
            </S.ArrowCircledSVG>
          </>
        )}
      </S.CoinBar>
      <S.CurrentPrice>{formatPrice(symbol, current_price)}</S.CurrentPrice>
      <div>
        {isVictoryGroup && (
          <VictoryGroup
            width={width}
            height={200}
            domainPadding={{ y: [50, 0] }}
            color={vGroupColor}
          >
            <VictoryLine data={marketData} />
          </VictoryGroup>
        )}
        {loading && <Loader height="150px" />}
        {error && <ErrorMessage />}
      </div>
    </S.CurrencyCard>
  );
}

export default CurrencyCard;
