import { ReactElement, useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";
import { useAppSelector } from "../../hooks/use-store";
import { COMPARE_STREAMING_URL } from "../../constants/api";
import * as S from "./styles/styled";

function Cryptocurrencies(): ReactElement {
  // const { currenciesList, exchangeCurrency } = useAppSelector(
  //   (state) => state.config
  // );
  const initialData = useAppSelector((state) => state.cryptoData.data);
  const [cryptoData, setCryptoData] = useState<any>(initialData);

  useEffect(() => {
    // const streamer = new WebSocket(COMPARE_STREAMING_URL);
    // streamer.onopen = function onStreamOpen() {
    //   const subRequest = {
    //     action: "SubAdd",
    //     subs: currenciesList.map(
    //       ({ symbol }) =>
    //         `5~CCCAGG~${symbol?.toUpperCase()}~${exchangeCurrency.id}`
    //     ),
    //   };
    //   streamer.send(JSON.stringify(subRequest));
    // };
    // streamer.onmessage = function onStreamMessage(event: any) {
    //   const { FROMSYMBOL, PRICE } = JSON.parse(event.data);
    //   if (FROMSYMBOL && PRICE) {
    //     setCryptoData((prevData: any) => {
    //       const symbol = FROMSYMBOL.toLowerCase();
    //       return {
    //         ...prevData,
    //         ...{ [symbol]: { ...prevData[symbol], current_price: PRICE } },
    //       };
    //     });
    //   }
    // };
    // return () => {
    //   streamer.close();
    // };
  }, []);

  return (
    <S.CurrencyContainer>
      {Object.entries(cryptoData).map(
        ([currency, currencyData]: any, index) => (
          <CurrencyCard
            key={currency}
            position={index % 2 === 0 ? "even" : "odd"}
            {...currencyData}
          />
        )
      )}
    </S.CurrencyContainer>
  );
}
export default Cryptocurrencies;
