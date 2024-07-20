import React, { useCallback, useEffect, useState } from "react";
import { promisifiedDelay } from "../../utils";
import axios from "axios";
import cn from "classnames";
import Loader from "../Loader";
import * as S from "./styled";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const API_KEY = "";

interface ITrendItem {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

const renderStatus = (percentage: number) => (
  <S.AngleSVG className={cn({ up: Math.sign(percentage) === -1 })}>
    <use xlinkHref="svg/sprite.svg#angle" />
  </S.AngleSVG>
);

function Trends(): React.ReactElement {
  const [trendsData, setTrandsData] = useState<ITrendItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getTrends = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const { data } = await axios({
        method: "get",
        url: API_URL,
        params: {
          vs_currency: "usd",
          ids: "bitcoin,dogecoin,ethereum,ripple,bitcoin-cash,chainlink,litecoin,polkadot,cardano,binancecoin,stellar,monero,solana",
          x_cg_demo_api_key: API_KEY,
        },
      });
      setTrandsData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setTrandsData([]);
      setLoading(false);
      setError(true);
    }
  }, []);

  const getMockTrends = useCallback(async () => {
    setLoading(true);
    await promisifiedDelay(2000);
    setTrandsData([
      {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
        image:
          "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        current_price: 65383,
        market_cap: 1291009037583,
        market_cap_rank: 1,
        fully_diluted_valuation: 1374323541065,
        total_volume: 37108044506,
        high_24h: 66059,
        low_24h: 64214,
        price_change_24h: 760.99,
        price_change_percentage_24h: 1.17759,
        market_cap_change_24h: 17782970229,
        market_cap_change_percentage_24h: 1.39669,
        circulating_supply: 19726934,
        total_supply: 21000000,
        max_supply: 21000000,
        ath: 73738,
        ath_change_percentage: -11.24789,
        ath_date: "2024-03-14T07:10:36.635Z",
        atl: 67.81,
        atl_change_percentage: 96412.23016,
        atl_date: "2013-07-06T00:00:00.000Z",

        last_updated: "2024-07-17T15:41:52.218Z",
      },
      {
        id: "ethereum",
        symbol: "eth",
        name: "Ethereum",
        image:
          "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
        current_price: 3470.9,
        market_cap: 417644847714,
        market_cap_rank: 2,
        fully_diluted_valuation: 417644847714,
        total_volume: 19025566643,
        high_24h: 3516.21,
        low_24h: 3420.33,
        price_change_24h: 4.6,
        price_change_percentage_24h: 0.13275,
        market_cap_change_24h: 1876046282,
        market_cap_change_percentage_24h: 0.45122,
        circulating_supply: 120221218.029974,
        total_supply: 120221218.029974,
        max_supply: null,
        ath: 4878.26,
        ath_change_percentage: -28.78667,
        ath_date: "2021-11-10T14:24:19.604Z",
        atl: 0.432979,
        atl_change_percentage: 802242.08641,
        atl_date: "2015-10-20T00:00:00.000Z",
        last_updated: "2024-07-17T15:41:43.805Z",
      },
      {
        id: "binancecoin",
        symbol: "bnb",
        name: "BNB",
        image:
          "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
        current_price: 578.79,
        market_cap: 89105934272,
        market_cap_rank: 4,
        fully_diluted_valuation: 89105934272,
        total_volume: 925905899,
        high_24h: 584.53,
        low_24h: 571.45,
        price_change_24h: 2.66,
        price_change_percentage_24h: 0.46158,
        market_cap_change_24h: 755670609,
        market_cap_change_percentage_24h: 0.85531,
        circulating_supply: 153856150,
        total_supply: 153856150,
        max_supply: 200000000,
        ath: 717.48,
        ath_change_percentage: -19.27932,
        ath_date: "2024-06-06T14:10:59.816Z",
        atl: 0.0398177,
        atl_change_percentage: 1454406.37113,
        atl_date: "2017-10-19T00:00:00.000Z",

        last_updated: "2024-07-17T15:41:42.405Z",
      },
      {
        id: "solana",
        symbol: "sol",
        name: "Solana",
        image:
          "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
        current_price: 160.52,
        market_cap: 74614965250,
        market_cap_rank: 5,
        fully_diluted_valuation: 93279614657,
        total_volume: 2996925813,
        high_24h: 163.79,
        low_24h: 158.21,
        price_change_24h: 2.31,
        price_change_percentage_24h: 1.458,
        market_cap_change_24h: 1205998172,
        market_cap_change_percentage_24h: 1.64285,
        circulating_supply: 464174737.447019,
        total_supply: 580286280.344213,
        max_supply: null,
        ath: 259.96,
        ath_change_percentage: -38.18895,
        ath_date: "2021-11-06T21:54:35.825Z",
        atl: 0.500801,
        atl_change_percentage: 31985.29455,
        atl_date: "2020-05-11T19:35:23.449Z",

        last_updated: "2024-07-17T15:42:34.353Z",
      },
      {
        id: "ripple",
        symbol: "xrp",
        name: "XRP",
        image:
          "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
        current_price: 0.613133,
        market_cap: 34243491047,
        market_cap_rank: 6,
        fully_diluted_valuation: 61354692328,
        total_volume: 3928117742,
        high_24h: 0.632027,
        low_24h: 0.57549,
        price_change_24h: 0.03023519,
        price_change_percentage_24h: 5.18705,
        market_cap_change_24h: 1831620362,
        market_cap_change_percentage_24h: 5.65108,
        circulating_supply: 55805339473,
        total_supply: 99987452475,
        max_supply: 100000000000,
        ath: 3.4,
        ath_change_percentage: -81.95977,
        ath_date: "2018-01-07T00:00:00.000Z",
        atl: 0.00268621,
        atl_change_percentage: 22723.56594,
        atl_date: "2014-05-22T00:00:00.000Z",

        last_updated: "2024-07-17T15:42:32.742Z",
      },
      {
        id: "dogecoin",
        symbol: "doge",
        name: "Dogecoin",
        image:
          "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
        current_price: 0.125336,
        market_cap: 18212021424,
        market_cap_rank: 10,
        fully_diluted_valuation: 18212835740,
        total_volume: 847824226,
        high_24h: 0.127744,
        low_24h: 0.123562,
        price_change_24h: 0.00030417,
        price_change_percentage_24h: 0.24327,
        market_cap_change_24h: 96315953,
        market_cap_change_percentage_24h: 0.53167,
        circulating_supply: 145147656383.705,
        total_supply: 145154146383.705,
        max_supply: null,
        ath: 0.731578,
        ath_change_percentage: -82.84908,
        ath_date: "2021-05-08T05:08:23.458Z",
        atl: 0.0000869,
        atl_change_percentage: 144280.8423,
        atl_date: "2015-05-06T00:00:00.000Z",

        last_updated: "2024-07-17T15:41:45.617Z",
      },
      {
        id: "cardano",
        symbol: "ada",
        name: "Cardano",
        image:
          "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
        current_price: 0.453217,
        market_cap: 16136150352,
        market_cap_rank: 11,
        fully_diluted_valuation: 20420695440,
        total_volume: 406363792,
        high_24h: 0.455088,
        low_24h: 0.434932,
        price_change_24h: 0.0081661,
        price_change_percentage_24h: 1.83487,
        market_cap_change_24h: 333973364,
        market_cap_change_percentage_24h: 2.11346,
        circulating_supply: 35558375961.7143,
        total_supply: 45000000000,
        max_supply: 45000000000,
        ath: 3.09,
        ath_change_percentage: -85.29944,
        ath_date: "2021-09-02T06:00:10.474Z",
        atl: 0.01925275,
        atl_change_percentage: 2257.03109,
        atl_date: "2020-03-13T02:22:55.044Z",

        last_updated: "2024-07-17T15:41:46.586Z",
      },
      {
        id: "polkadot",
        symbol: "dot",
        name: "Polkadot",
        image:
          "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
        current_price: 6.48,
        market_cap: 9005398309,
        market_cap_rank: 16,
        fully_diluted_valuation: 9530261897,
        total_volume: 218102249,
        high_24h: 6.53,
        low_24h: 6.32,
        price_change_24h: 0.0239058,
        price_change_percentage_24h: 0.37056,
        market_cap_change_24h: 53262037,
        market_cap_change_percentage_24h: 0.59496,
        circulating_supply: 1388892661.4843,
        total_supply: 1469841794.39866,
        max_supply: null,
        ath: 54.98,
        ath_change_percentage: -88.22253,
        ath_date: "2021-11-04T14:10:09.301Z",
        atl: 2.7,
        atl_change_percentage: 140.05439,
        atl_date: "2020-08-20T05:48:11.359Z",

        last_updated: "2024-07-17T15:42:00.483Z",
      },
      {
        id: "chainlink",
        symbol: "link",
        name: "Chainlink",
        image:
          "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
        current_price: 14.34,
        market_cap: 8727244761,
        market_cap_rank: 17,
        fully_diluted_valuation: 14351661195,
        total_volume: 423696415,
        high_24h: 14.61,
        low_24h: 14.12,
        price_change_24h: -0.11251674610075035,
        price_change_percentage_24h: -0.7783,
        market_cap_change_24h: -38740913.51163864,
        market_cap_change_percentage_24h: -0.44195,
        circulating_supply: 608099971.3083414,
        total_supply: 1000000000,
        max_supply: 1000000000,
        ath: 52.7,
        ath_change_percentage: -72.76538,
        ath_date: "2021-05-10T00:13:57.214Z",
        atl: 0.148183,
        atl_change_percentage: 9585.11872,
        atl_date: "2017-11-29T00:00:00.000Z",

        last_updated: "2024-07-17T15:41:42.762Z",
      },
      {
        id: "bitcoin-cash",
        symbol: "bch",
        name: "Bitcoin Cash",
        image:
          "https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932",
        current_price: 381.89,
        market_cap: 7554020833,
        market_cap_rank: 18,
        fully_diluted_valuation: 8038605220,
        total_volume: 307091945,
        high_24h: 397.03,
        low_24h: 378.05,
        price_change_24h: -8.307928230376433,
        price_change_percentage_24h: -2.12914,
        market_cap_change_24h: -144062117.6687355,
        market_cap_change_percentage_24h: -1.8714,
        circulating_supply: 19734074.8966508,
        total_supply: 21000000,
        max_supply: 21000000,
        ath: 3785.82,
        ath_change_percentage: -89.88883,
        ath_date: "2017-12-20T00:00:00.000Z",
        atl: 76.93,
        atl_change_percentage: 397.55215,
        atl_date: "2018-12-16T00:00:00.000Z",

        last_updated: "2024-07-17T15:42:15.842Z",
      },
      {
        id: "litecoin",
        symbol: "ltc",
        name: "Litecoin",
        image:
          "https://coin-images.coingecko.com/coins/images/2/large/litecoin.png?1696501400",
        current_price: 73.07,
        market_cap: 5467018252,
        market_cap_rank: 21,
        fully_diluted_valuation: 6142678459,
        total_volume: 316383609,
        high_24h: 74.25,
        low_24h: 72.15,
        price_change_24h: -0.7120226058583228,
        price_change_percentage_24h: -0.96505,
        market_cap_change_24h: -48817395.398138046,
        market_cap_change_percentage_24h: -0.88504,
        circulating_supply: 74760470.7334713,
        total_supply: 84000000,
        max_supply: 84000000,
        ath: 410.26,
        ath_change_percentage: -82.17555,
        ath_date: "2021-05-10T03:13:07.904Z",
        atl: 1.15,
        atl_change_percentage: 6265.24006,
        atl_date: "2015-01-14T00:00:00.000Z",

        last_updated: "2024-07-17T15:41:54.473Z",
      },
      {
        id: "stellar",
        symbol: "xlm",
        name: "Stellar",
        image:
          "https://coin-images.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1696501482",
        current_price: 0.110156,
        market_cap: 3231443805,
        market_cap_rank: 33,
        fully_diluted_valuation: 5516789247,
        total_volume: 145685270,
        high_24h: 0.112071,
        low_24h: 0.106044,
        price_change_24h: 0.00229465,
        price_change_percentage_24h: 2.1274,
        market_cap_change_24h: 80220824,
        market_cap_change_percentage_24h: 2.5457,
        circulating_supply: 29288406253.6024,
        total_supply: 50001786959.6824,
        max_supply: 50001786959.6824,
        ath: 0.875563,
        ath_change_percentage: -87.39377,
        ath_date: "2018-01-03T00:00:00.000Z",
        atl: 0.00047612,
        atl_change_percentage: 23082.11345,
        atl_date: "2015-03-05T00:00:00.000Z",

        last_updated: "2024-07-17T15:42:43.523Z",
      },
      {
        id: "monero",
        symbol: "xmr",
        name: "Monero",
        image:
          "https://coin-images.coingecko.com/coins/images/69/large/monero_logo.png?1696501460",
        current_price: 160.62,
        market_cap: 2974655182,
        market_cap_rank: 34,
        fully_diluted_valuation: null,
        total_volume: 91047691,
        high_24h: 163.97,
        low_24h: 160.22,
        price_change_24h: -0.37431676778953715,
        price_change_percentage_24h: -0.23251,
        market_cap_change_24h: 6859518,
        market_cap_change_percentage_24h: 0.23113,
        circulating_supply: 18445342.6021475,
        total_supply: 18444108,
        max_supply: null,
        ath: 542.33,
        ath_change_percentage: -70.27578,
        ath_date: "2018-01-09T00:00:00.000Z",
        atl: 0.216177,
        atl_change_percentage: 74469.58698,
        atl_date: "2015-01-14T00:00:00.000Z",

        last_updated: "2024-07-17T15:42:31.440Z",
      },
    ]);
    setLoading(false);
  }, []);

  useEffect(() => {
    // getTrends();
    getMockTrends();

    const interval = setInterval(() => {
      //   getTrends();
      getMockTrends();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [getTrends]);

  return (
    <S.TrandsContainer>
      <S.GridHeading>Name</S.GridHeading>
      <S.GridHeading>LastPrice</S.GridHeading>
      <S.GridHeading>24h Change</S.GridHeading>
      {loading && !error && !trendsData.length && (
        <div style={{ gridColumn: "1/-1", textAlign: "center" }}>
          <Loader />
        </div>
      )}
      {!loading && error && !trendsData.length && (
        <div style={{ gridColumn: "1/-1", textAlign: "center" }}>
          Data is currently unavailable!
        </div>
      )}
      {trendsData.map(
        ({ id, name, symbol, current_price, price_change_percentage_24h }) => (
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
