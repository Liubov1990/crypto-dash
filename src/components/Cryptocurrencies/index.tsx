import { ReactElement, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/use-store";
// import { COMPARE_STREAMING_URL } from "../../constants/api";
import { convertGeneralCryptoData } from "../../utils";
import CurrencyCard from "./CurrencyCard";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import * as S from "./styles/styled";

function Cryptocurrencies(): ReactElement {
  // const { currenciesList, exchangeCurrency } = useAppSelector(
  //   (state) => state.config
  // );
  const { data, isLoading, error } = useAppSelector(
    (state) => state.cryptoData
  );
  const [cryptoData, setCryptoData] = useState<any>({});

  const getElementOrder = useCallback(
    (order: number) => (order % 2 === 0 ? "even" : "odd"),
    []
  );

  const isContent = !isLoading && !error && data.length;
  const isLoader = isLoading && !data.length;
  const isError = !isLoading && !data.length && error;

  // useEffect(() => {
  //   const streamer = new WebSocket(COMPARE_STREAMING_URL);
  //   streamer.onopen = function onStreamOpen() {
  //     const subRequest = {
  //       action: "SubAdd",
  //       subs: currenciesList.map(
  //         ({ symbol }) =>
  //           `5~CCCAGG~${symbol?.toUpperCase()}~${exchangeCurrency.id}`
  //       ),
  //     };
  //     streamer.send(JSON.stringify(subRequest));
  //   };
  //   streamer.onmessage = function onStreamMessage(event: any) {
  //     const { FROMSYMBOL, PRICE } = JSON.parse(event.data);
  //     if (FROMSYMBOL && PRICE) {
  //       setCryptoData((prevData: any) => {
  //         const symbol = FROMSYMBOL.toLowerCase();
  //         const currentPriceData = prevData[symbol];

  //         return {
  //           ...prevData,
  //           ...(currentPriceData && {
  //             [symbol]: { ...currentPriceData, current_price: PRICE },
  //           }),
  //         };
  //       });
  //     }
  //   };
  //   return () => {
  //     streamer.close();
  //   };
  // }, []);

  useEffect(() => {
    setCryptoData(convertGeneralCryptoData(data));
  }, [data]);

  return (
    <S.CurrencyContainer>
      {isContent &&
        Object.entries(cryptoData).map(
          ([currency, currencyData]: any, index) => (
            <CurrencyCard
              key={currency}
              position={getElementOrder(index)}
              {...currencyData}
            />
          )
        )}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
    </S.CurrencyContainer>
  );
}
export default Cryptocurrencies;
