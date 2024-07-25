import React, { useCallback, useEffect, useMemo } from "react";
import cn from "classnames";
import useResizeObserver from "use-resize-observer";
import Loader from "../Loader";
import * as S from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import {
  fetchGeneralData,
  IGeneralDataItem,
  setData,
} from "../../redux/slices/cryptoDataSlice";
import { REFRESH_CHART_INTERVAL } from "../../constants/charts";
import { promisifiedDelay } from "../../utils";
import { TRENDS_MOCK } from "../../mocks/trends";

const renderStatus = (percentage: number) => (
  <S.AngleSVG className={cn({ up: Math.sign(percentage) === -1 })}>
    <use xlinkHref="svg/sprite.svg#angle" />
  </S.AngleSVG>
);

function Trends(): React.ReactElement {
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

  const getMockedTrends = async () => {
    await promisifiedDelay(1000);
    dispatch(setData(TRENDS_MOCK));
  };

  useEffect(() => {
    getMockedTrends();
    // getTrends();

    const interval = setInterval(() => {
      getMockedTrends();
      // getTrends();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [getTrends]);

  return (
    <S.TrandsContainer ref={ref}>
      <S.GridHeading>Name</S.GridHeading>
      <S.GridHeading>
        24h Average price({exchangeCurrency.symbol})
      </S.GridHeading>
      <S.GridHeading>24h Change(%)</S.GridHeading>
      {isLoading && !error && (
        <S.GridConcat>
          <Loader height={`${height / 1.5}px`} />
        </S.GridConcat>
      )}
      {!isLoading && error && (
        <S.GridConcat>Data is currently unavailable!</S.GridConcat>
      )}
      {!isLoading &&
        !error &&
        data.map(
          ({
            id,
            name,
            symbol,
            current_price,
            price_change_percentage_24h,
          }: IGeneralDataItem) => (
            <React.Fragment key={id}>
              <S.Currency>
                {symbol} <span>{name}</span>
              </S.Currency>
              <S.Price>{current_price}</S.Price>
              <S.Change>
                {Math.abs(price_change_percentage_24h)}
                <span>{renderStatus(price_change_percentage_24h)}</span>
              </S.Change>
            </React.Fragment>
          )
        )}
    </S.TrandsContainer>
  );
}

export default Trends;
