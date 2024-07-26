import { Fragment, ReactNode, useCallback, useEffect, useMemo } from "react";
import useResizeObserver from "use-resize-observer";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import {
  fetchGeneralData,
  IGeneralDataItem,
  setData,
} from "../../redux/slices/cryptoDataSlice";
import { REFRESH_CHART_INTERVAL } from "../../constants/charts";
import { promisifiedDelay } from "../../utils";
import { TRENDS_MOCK } from "../../mocks/trends";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import * as S from "./styled";

const renderStatus = (percentage: number) => (
  <S.AngleSVG className={cn({ up: Math.sign(percentage) === -1 })}>
    <use xlinkHref="svg/sprite.svg#angle" />
  </S.AngleSVG>
);

function Trends(): ReactNode {
  const { ref, height = 1 } = useResizeObserver<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const { currenciesList, exchangeCurrency } = useAppSelector(
    (state) => state.config
  );
  const { data, isLoading, error } = useAppSelector(
    (state) => state.cryptoData
  );
  const currenciesIds = useMemo(
    () => currenciesList.map(({ id }) => id).join(","),
    [currenciesList]
  );

  const isContent = !isLoading && !error;
  const isError = !isLoading && error;
  const isShowLoader = isLoading && !error;

  const getTrends = useCallback(
    () =>
      dispatch(
        fetchGeneralData({
          fromCurrencies: currenciesIds,
          toCurrency: exchangeCurrency.id,
        })
      ),
    [currenciesIds, exchangeCurrency.id]
  );
  // @ts-ignore
  const getMockedTrends = async () => {
    await promisifiedDelay(1000);
    dispatch(setData(TRENDS_MOCK));
  };

  useEffect(() => {
    // getMockedTrends();
    getTrends();

    const interval = setInterval(() => {
      // getMockedTrends();
      getTrends();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [getTrends]);

  return (
    <S.TrandsContainer ref={ref}>
      <S.GridHeading>Name</S.GridHeading>
      <S.GridHeading>Average price({exchangeCurrency.symbol})</S.GridHeading>
      <S.GridHeading>24h Change(%)</S.GridHeading>
      {isContent &&
        data.map(
          ({
            id,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
          }: IGeneralDataItem) => (
            <Fragment key={id}>
              <S.Currency>
                {symbol} <span>{name}</span>
              </S.Currency>
              <S.Price>{current_price}</S.Price>
              <S.Change>
                {Math.abs(price_change_percentage_24h)}
                <span>{renderStatus(price_change_percentage_24h)}</span>
              </S.Change>
            </Fragment>
          )
        )}
      {isShowLoader && (
        <S.GridConcat>
          <Loader height={`${height / 1.5}px`} />
        </S.GridConcat>
      )}
      {isError && (
        <S.GridConcat>
          <ErrorMessage />
        </S.GridConcat>
      )}
    </S.TrandsContainer>
  );
}

export default Trends;
