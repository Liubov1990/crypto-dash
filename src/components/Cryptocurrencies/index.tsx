import { ReactElement, useCallback, useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";
import { useAppSelector } from "../../hooks/use-store";
// import { COMPARE_STREAMING_URL } from "../../constants/api";
import * as S from "./styles/styled";
import { convertGeneralCryptoData } from "../../utils";
import Loader from "../Loader";

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
      {!isLoading &&
        !error &&
        data.length &&
        Object.entries(cryptoData).map(
          ([currency, currencyData]: any, index) => (
            <CurrencyCard
              key={currency}
              position={getElementOrder(index)}
              {...currencyData}
            />
          )
        )}
      {isLoading && !data.length && <Loader />}
      {!isLoading && !data.length && error && <div>Data is not available</div>}
    </S.CurrencyContainer>
  );
}
export default Cryptocurrencies;
