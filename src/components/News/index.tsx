import { ReactNode, useEffect, useState } from "react";
import moment from "moment";
import { promisifiedDelay } from "../../utils";
import { getNews } from "../../api";
import { REFRESH_CHART_INTERVAL } from "../../constants/charts";
import { NEWS_MOCK } from "../../mocks/news";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import * as S from "./styled";

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

function News(): ReactNode {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getNewsData = async () => {
    setError(false);
    setLoading(true);

    try {
      const news = await getNews();
      setNews(news);
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
    // getNewsData();
    getMockedNews();

    const interval = setInterval(() => {
      // getNewsData();
      getMockedNews();
    }, REFRESH_CHART_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.NewsContainer>
      {news?.map(
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
      {error && <ErrorMessage />}
    </S.NewsContainer>
  );
}

export default News;
