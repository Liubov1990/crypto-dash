import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { promisifiedDelay } from "../../utils";
import Loader from "../Loader";
import * as S from "./styled";
import { COMPARE_API_KEY, COMPARE_NEWS_URL } from "../../constants/api";
import { NEWS_MOCK } from "../../mocks/news";
import { REFRESH_CHART_INTERVAL } from "../../constants/charts";

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
    setNews(NEWS_MOCK);
    setLoading(false);
  };

  const getFormattedDate = (timestamp: number) =>
    moment.unix(timestamp).format("MMMM Do YYYY, h:mm a");

  useEffect(() => {
    // getNews();
    getMockedNews();

    const interval = setInterval(() => {
      // getNews();
      getMockedNews();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
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
