import { ReactElement, useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";

const CURRENCIES_IDS = [
  "btc",
  "eth",
  // "xrp",
  // "bch",
  // "link",
  // "ltc",
  // "ada",
  // "bnb",
  // "xlm",
  // "xmr",
  // "sol",
];

const API_KEY = "";

function Cryptocurrencies(): ReactElement {
  const [cryptoData, setCryptoData] = useState<any>({ BTC: 66151.4049257533 });

  useEffect(() => {
    const streamer = new WebSocket(
      "https://streamer.cryptocompare.com/v2?api_key=" + API_KEY
    );

    streamer.onopen = function onStreamOpen() {
      const subRequest = {
        action: "SubAdd",
        subs: CURRENCIES_IDS.map((id) => `5~CCCAGG~${id.toUpperCase()}~USD`),
      };
      streamer.send(JSON.stringify(subRequest));
    };

    streamer.onmessage = function onStreamMessage(event: any) {
      const { FROMSYMBOL, PRICE } = JSON.parse(event.data);

      if (FROMSYMBOL && PRICE) {
        setCryptoData((prevData: any) => ({
          ...prevData,
          ...{ [FROMSYMBOL]: PRICE },
        }));
      }
    };

    return () => {
      streamer.close();
    };
  }, []);

  return (
    <div
      style={{ display: "flex", height: "calc(100% - 20px)", maxHeight: 400 }}
    >
      {Object.entries(cryptoData).map(([currency, price]: any) => (
        <CurrencyCard key={currency} currency={currency} price={price} />
      ))}
    </div>
  );
}
export default Cryptocurrencies;
