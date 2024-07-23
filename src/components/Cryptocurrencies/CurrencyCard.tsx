import { Moment } from "moment";
import { ReactElement, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";
import usePrevious from "../../hooks/use-prev";
import axios from "axios";
import cn from "classnames";
import { convertMarketOverviewData, promisifiedDelay } from "../../utils";
import { VictoryGroup, VictoryLine } from "victory";
import { IGeneraDataItem } from "../../redux/slices/cryptoDataSlice";
import { useAppSelector } from "../../hooks/use-store";
import { COMAPRE_HISTOHOUR_URL, COMPARE_API_KEY } from "../../constants/api";
import Loader from "../Loader";
import * as S from "./styles/CurrencyCard.styled";

interface IMarketOverviewItem {
  x: Moment | number;
  y: number;
}

function CurrencyCard({
  image,
  symbol,
  current_price,
  position,
}: IGeneraDataItem): ReactElement {
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  const { id } = useAppSelector((state) => state.config.exchangeCurrency);
  const prevPrice = usePrevious(current_price);
  const [marketData, setMarketData] = useState<IMarketOverviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const vGroupColor = position === "even" ? "#4DFFDF" : "#E323FF";

  const getDailyOverview = async () => {
    setError(false);
    setLoading(true);

    try {
      const res = await axios({
        method: "get",
        url: COMAPRE_HISTOHOUR_URL,
        params: {
          api_key: COMPARE_API_KEY,
          fsym: symbol,
          tsym: id,
          aggregate: 1,
          limit: 12,
        },
      });
      const { Data } = await res.data;
      setMarketData(convertMarketOverviewData(Data.Data));
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
    setMarketData(
      convertMarketOverviewData([
        {
          time: 1721329200,
          close: 63545.86,
        },
        {
          time: 1721332800,
          close: 63819.3,
        },
        {
          time: 1721336400,
          close: 63838.59,
        },
        {
          time: 1721340000,
          close: 64022.45,
        },
        {
          time: 1721343600,
          close: 63981.43,
        },
        {
          time: 1721347200,
          close: 63594.29,
        },
        {
          time: 1721350800,
          close: 63804.41,
        },
        {
          time: 1721354400,
          close: 63818.92,
        },
        {
          time: 1721358000,
          close: 64318.7,
        },
        {
          time: 1721361600,
          close: 64143.66,
        },
        {
          time: 1721365200,
          close: 64164.28,
        },
        {
          time: 1721368800,
          close: 64208.81,
        },
      ])
    );
    setLoading(false);
  };

  useEffect(() => {
    // getDailyOverview();
    getMockOverview();
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
          USD
        </span>
        {prevPrice && (
          <>
            {current_price !== prevPrice && (
              <span>
                {Math.abs(
                  ((current_price - prevPrice) / prevPrice) * 100
                ).toFixed(5)}
              </span>
            )}
            <S.ArrowCircledSVG
              className={cn({
                up: current_price > prevPrice,
                down: current_price < prevPrice,
              })}
            >
              <use xlinkHref="svg/sprite.svg#circled-arrow" />
            </S.ArrowCircledSVG>
          </>
        )}
      </S.CoinBar>
      <S.CurrentPrice>{Number(current_price).toFixed(4)}</S.CurrentPrice>
      <div>
        {!error && !loading && (
          <VictoryGroup
            width={width}
            height={height < 200 ? 200 : height}
            domainPadding={{ y: [50, 0] }}
            color={vGroupColor}
          >
            <VictoryLine data={marketData} />
          </VictoryGroup>
        )}
        {error && <div>Data is currently unavailable!</div>}
        {loading && <Loader />}
      </div>
    </S.CurrencyCard>
  );
}

export default CurrencyCard;
