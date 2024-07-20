import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { promisifiedDelay } from "../../utils";
import Loader from "../Loader";
import * as S from "./styled";
import { COMPARE_API_KEY, COMPARE_NEWS_URL } from "../../constants/api";

type NewsItem = {
  id: string;
  guid: string;
  published_on: number;
  imageurl: string;
  title: string;
  url: string;
  body: string;
  tags: string;
  lang: string;
  upvotes: string;
  downvotes: string;
  categories: string;
  source_info: {
    name: string;
    img: string;
    lang: string;
  };
  source: string;
};

function News(): React.ReactNode {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getNews = async () => {
    setError(false);
    setLoading(true);

    try {
      const res = await axios({
        method: "get",
        url: COMPARE_NEWS_URL,
        params: {
          api_key: COMPARE_API_KEY,
        },
      });
      const { Data } = await res.data;
      setNews(Data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setError(true);
    }
  };

  const getMockedNews = async () => {
    setLoading(true);
    await promisifiedDelay(1000);
    setNews([
      {
        id: "31269784",
        guid: "https://en.coinotag.com/bitcoin-price-surges-to-67000-driven-by-institutional-interest-and-miners-accumulation/",
        published_on: 1721485443,
        imageurl: "https://resources.cryptocompare.com/news/77/31269784.jpeg",
        title:
          "Bitcoin Price Surges to $67,000 Driven by Institutional Interest and Miners’ Accumulation",
        url: "https://en.coinotag.com/bitcoin-price-surges-to-67000-driven-by-institutional-interest-and-miners-accumulation/",
        body: "Bitcoin’s price has recently experienced a notable upswing, breaking through the $67,000 threshold after an extended period of fluctuation. Several influencing factors, such as governmental actions and investor behavior, are contributing to this upward trend. A compelling detail to consider is the recent accumulation of Bitcoin by miners, signaling potential long-term bullish sentiment. Discover the",
        tags: "News|BTC",
        lang: "EN",
        upvotes: "0",
        downvotes: "0",
        categories: "BTC|TRADING|BUSINESS",
        source_info: {
          name: "CoinOtag",
          img: "https://resources.cryptocompare.com/news/77/default.png",
          lang: "EN",
        },
        source: "coinotag",
      },
      {
        id: "31269664",
        guid: "https://coingape.com/?p=208640",
        published_on: 1721485272,
        imageurl: "https://images.cryptocompare.com/news/default/coingape.png",
        title: "Crypto Titans Bet On Donald Trump’s Win For SEC Shake-Up",
        url: "https://coingape.com/crypto-titans-bet-on-donald-trumps-win-for-sec-shake-up/",
        body: "As the 2024 US presidential election approaches, crypto leaders are anticipating significant changes in regulatory oversight if Donald Trump returns to the White House. The crypto industry is dissatisfied with current administration’s stringent approach led by the Securities and Exchange Commission (SEC) under Chair Gary Gensler. This has prompted hopes among crypto advocates that a The post Crypto Titans Bet On Donald Trump’s Win For SEC Shake-Up appeared first on CoinGape .",
        tags: "24/7 Cryptocurrency News|Regulation News|Donald Trump Bitcoin|Donald Trump Crypto|Ripple vs SEC News|Securities and Exchange Commission",
        lang: "EN",
        upvotes: "0",
        downvotes: "0",
        categories: "REGULATION|EXCHANGE",
        source_info: {
          name: "CoinGape",
          img: "https://images.cryptocompare.com/news/default/coingape.png",
          lang: "EN",
        },
        source: "coingape",
      },
      {
        id: "31269524",
        guid: "https://en.coinotag.com/dogecoin-price-surge-whale-accumulation-and-bullish-metrics-point-to-0-2-target/",
        published_on: 1721484943,
        imageurl: "https://resources.cryptocompare.com/news/77/31269524.jpeg",
        title:
          "Dogecoin Price Surge: Whale Accumulation and Bullish Metrics Point to $0.2 Target",
        url: "https://en.coinotag.com/dogecoin-price-surge-whale-accumulation-and-bullish-metrics-point-to-0-2-target/",
        body: "The recent rise in Dogecoin prices has sparked interest within the cryptocurrency community. There is growing speculation that Dogecoin’s value may continue to increase due to various market dynamics. Significant whale accumulation and promising on-chain metrics are bolstering a bullish outlook for Dogecoin. Dogecoin’s recent surge in price, boosted by whale transactions and on-chain data,",
        tags: "News|DOGE",
        lang: "EN",
        upvotes: "0",
        downvotes: "0",
        categories: "DOGE|TRADING|MARKET",
        source_info: {
          name: "CoinOtag",
          img: "https://resources.cryptocompare.com/news/77/default.png",
          lang: "EN",
        },
        source: "coinotag",
      },
    ]);
    setLoading(false);
  };

  const getFormattedDate = (timestamp: number) =>
    moment.unix(timestamp).format("MMMM Do YYYY, h:mm a");

  useEffect(() => {
    // getNews();
    getMockedNews();
  }, []);

  if (error) {
    return <div>News are not available at the moment</div>;
  }

  return (
    <S.NewsContainer>
      {news.map(
        ({ id, imageurl, title, url, categories, published_on, body }) => (
          <S.Article key={id}>
            <S.ImgContainer>
              <img
                src={imageurl}
                loading="lazy"
                width="180"
                height="100"
                alt={title}
              />
            </S.ImgContainer>
            <S.TextBlock>
              <S.Title>
                <a href={url} target="_blank">
                  {title}
                </a>
              </S.Title>
              <S.Description>{body}</S.Description>
              <S.Info>
                <S.Time>{getFormattedDate(published_on)}</S.Time>
                <S.Categories>
                  {categories.split("|").map((category) => (
                    <S.Category key={category}>{category}</S.Category>
                  ))}
                </S.Categories>
              </S.Info>
            </S.TextBlock>
          </S.Article>
        )
      )}
      {loading && <Loader />}
    </S.NewsContainer>
  );
}

export default News;
