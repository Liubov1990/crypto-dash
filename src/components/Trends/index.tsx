import React, { useCallback, useEffect, useMemo } from "react";
import cn from "classnames";
import Loader from "../Loader";
import * as S from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import {
  fetchGeneralData,
  IGeneraDataItem,
} from "../../redux/slices/cryptoDataSlice";

const renderStatus = (percentage: number) => (
  <S.AngleSVG className={cn({ up: Math.sign(percentage) === -1 })}>
    <use xlinkHref="svg/sprite.svg#angle" />
  </S.AngleSVG>
);

function Trends(): React.ReactElement {
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

  useEffect(() => {
    // getTrends();

    const interval = setInterval(() => {
      // getTrends();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [getTrends]);

  return (
    <S.TrandsContainer>
      <S.GridHeading>Name</S.GridHeading>
      <S.GridHeading>
        24h Average price({exchangeCurrency.symbol})
      </S.GridHeading>
      <S.GridHeading>24h Change(%)</S.GridHeading>
      {isLoading && !error && (
        <div style={{ gridColumn: "1/-1", textAlign: "center" }}>
          <Loader />
        </div>
      )}
      {!isLoading && error && (
        <div style={{ gridColumn: "1/-1", textAlign: "center" }}>
          Data is currently unavailable!
        </div>
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
          }: IGeneraDataItem) => (
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
