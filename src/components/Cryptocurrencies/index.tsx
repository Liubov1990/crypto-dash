import { ReactElement, useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";
import { useAppSelector } from "../../hooks/use-store";
import { COMPARE_STREAMING_URL } from "../../constants/api";
import { convertGeneralCryptoData } from "../../utils";

function Cryptocurrencies(): ReactElement {
  // const { currenciesList, exchangeCurrency } = useAppSelector(
  //   (state) => state.config
  // );
  const { data } = useAppSelector((state) => state.cryptoData);
  const [cryptoData, setCryptoData] = useState<any>({});

  useEffect(() => {
    setCryptoData(convertGeneralCryptoData(data));
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
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100% - 20px)",
        maxHeight: 400,
        overflowX: "auto",
      }}
    >
      {Object.entries(cryptoData).map(([currency, currencyData]: any) => (
        <CurrencyCard key={currency} {...currencyData} />
      ))}
    </div>
  );
}
export default Cryptocurrencies;
