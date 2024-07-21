import Cryptocurrencies from "../components/Cryptocurrencies";
import MarketOverview from "../components/MarketOverview";
import News from "../components/News";
import TradeHistory from "../components/TradeHistory";
import Trends from "../components/Trends";

const TAB_COMMON_PROPS = {
  minHeight: 240,
  group: "shared",
  cached: true,
};

const TAB_DESKTOP_PROPS = {
  minWidth: 400,
};

export const getDockboxContent = (desktopMode = true) => ({
  news: {
    ...TAB_COMMON_PROPS,
    ...(desktopMode && TAB_DESKTOP_PROPS),
    id: "news",
    title: "News",
    content: <News />,
  },
  history: {
    ...TAB_COMMON_PROPS,
    ...(desktopMode && TAB_DESKTOP_PROPS),
    id: "history",
    title: "Trade history",
    content: <TradeHistory />,
  },
  cryptocurrencies: {
    ...TAB_COMMON_PROPS,
    ...(desktopMode && TAB_DESKTOP_PROPS),
    id: "cryptocurrencies",
    title: "Cryptocurrencies",
    content: <Cryptocurrencies />,
  },
  overview: {
    ...TAB_COMMON_PROPS,
    ...(desktopMode && TAB_DESKTOP_PROPS),
    id: "overview",
    title: "Market overview",
    content: <MarketOverview />,
  },
  trends: {
    ...TAB_COMMON_PROPS,
    ...(desktopMode && TAB_DESKTOP_PROPS),
    id: "trends",
    title: "Trends",
    content: <Trends />,
  },
});
