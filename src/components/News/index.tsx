import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { promisifiedDelay } from "../../utils";
import Button from "../Button";
import * as S from "./styled";

type NewsItem = {
  uuid: string;
  description: string;
  title: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
};

const NEWS_API_KEY = "";
const NEWS_URL = `https://api.thenewsapi.com/v1/news/all?api_token=${NEWS_API_KEY}`;

function News(): React.ReactNode {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState<number | null>(null);

  const getNews = async () => {
    setError(false);
    setLoading(true);

    try {
      const {
        data: {
          meta: { found },
          data,
        },
      } = await axios({
        method: "get",
        url: NEWS_URL,
        params: {
          language: "en",
          search: "cryptomarket",
          categories: "business,tech,politics",
          published_after: moment().subtract(1, "years").format("YYYY-MM"),
          page,
        },
      });
      setNews((prevNews) => [...prevNews, ...data]);
      setAllPages(Math.ceil(found / 3));
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
        uuid: "ada64912-58e0-4f98-a918-a601c0b004fb",
        title:
          "Bitcoin price increased 37.06% in March, beating 97.6% of the S&P 500",
        description: "",
        keywords: "",
        snippet:
          "Victoria, Seychelles - March 22, 2023 (Investorideas.com Newswire) With the recent crash of Silicon Valley Bank, people are becoming increasingly worried about ...",
        url: "https://www.investorideas.com/news/2023/cryptocurrency/03221Bitcoin-Price.asp",
        image_url:
          "https://www.investorideas.com/images/top-sectors/news-investorideas.gif",
        language: "en",
        published_at: "2023-03-22T15:00:00.000000Z",
        source: "investorideas.com",
        categories: ["business"],
        relevance_score: 17.56314,
      },
      {
        uuid: "c1a17e1f-8a16-4924-a3a0-0f3be55418a8",
        title:
          "Coinbase a Leading Beneficiary of Crypto Market Growth: JPMorgan By Investing.com",
        description:
          "Coinbase a Leading Beneficiary of Crypto Market Growth: JPMorgan",
        keywords: "",
        snippet:
          "© Reuters\n\nBy Sam Boughedda\n\nInvesting.com — On Friday, JPMorgan (NYSE: ) analyst Kenneth Worthington gave bullish commentary on the cryptocurrency industry ...",
        url: "https://www.investing.com/news/stock-market-news/coinbase-a-leading-beneficiary-of-crypto-market-growth-jpmorgan-2733615",
        image_url:
          "https://i-invdn-com.investing.com/news/moved_LYNXMPEH3G009-OCABS_L.jpg",
        language: "en",
        published_at: "2022-01-07T19:30:02.000000Z",
        source: "investing.com",
        categories: ["business"],
        relevance_score: 16.19388,
      },
      {
        uuid: "7c8d4720-64ae-4b41-85c8-dce041dcb92e",
        title:
          "They forecast record growth of Elon Musk’s favorite cryptocurrency",
        description:
          "Cryptocurrency analyst and trader Justin Bennett believes that the price of Dogecoin (DOGE) could grow more than 1,000%. “DOGE does what it does best. The…",
        keywords: "",
        snippet:
          "Cryptocurrency analyst and trader Justin Bennett believes that the price of Dogecoin (DOGE) could grow more than 1,000%. “DOGE does what it does best. The las...",
        url: "https://marketresearchtelecast.com/they-forecast-record-growth-of-elon-musks-favorite-cryptocurrency/176940/",
        image_url:
          "https://crypto.snapi.dev/images/v1/i/w/blackrock-1-1224x689-523125.jpg",
        language: "en",
        published_at: "2021-10-12T16:07:22.000000Z",
        source: "news.google.com",
        categories: ["tech", "general", "business"],
        relevance_score: 15.613641,
      },
    ]);
    setLoading(false);
    setAllPages(1);
  };

  useEffect(() => {
    // getNews();
    getMockedNews();
  }, [page]);

  if (error) {
    return <div>News are not available at the moment</div>;
  }

  return (
    <S.NewsContainer>
      {news.map(
        (
          { uuid, image_url, title, url, categories, published_at, snippet },
          index
        ) => (
          <S.Article key={`${uuid}_${index}`}>
            <S.ImgContainer>
              <img
                src={image_url}
                loading="lazy"
                width="180"
                height="100"
                alt="image"
              />
            </S.ImgContainer>
            <S.TextBlock>
              <S.Title>
                <a href={url} target="_blank">
                  {title}
                </a>
              </S.Title>
              <S.Description>{snippet}</S.Description>
              <S.Info>
                <S.Time>
                  {`${moment(published_at).format("MMMM Do YYYY, h:mm a")}`}
                </S.Time>
                <S.Categories>
                  {categories.map((category) => (
                    <S.Category key={category}>{category}</S.Category>
                  ))}
                </S.Categories>
              </S.Info>
            </S.TextBlock>
          </S.Article>
        )
      )}
      {Number(allPages) > page && !loading && (
        <Button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Load more
        </Button>
      )}
      {loading && <div>Loading...</div>}
    </S.NewsContainer>
  );
}

export default News;
