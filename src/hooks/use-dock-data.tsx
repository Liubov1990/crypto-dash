import { useCallback, useEffect, useMemo, useState } from "react";
import { LayoutData, TabBase } from "rc-dock";
import News from "../components/News";
import TradeHistory from "../components/TradeHistory";
import Trends from "../components/Trends";
import MarketOverview from "../components/MarketOverview";
import Cryptocurrencies from "../components/Cryptocurrencies";
import { useAppSelector } from "./use-store";

const tabCommonProps = {
  minWidth: 400,
  minHeight: 240,
  group: "shared",
  cached: true,
};

const tabsContents = {
  news: {
    ...tabCommonProps,
    id: "news",
    title: "News",
    content: <News />,
  },
  history: {
    ...tabCommonProps,
    id: "history",
    title: "Trade history",
    content: <TradeHistory />,
  },
  cryptocurrencies: {
    ...tabCommonProps,
    id: "cryptocurrencies",
    title: "Cryptocurrencies",
    content: <Cryptocurrencies />,
  },
  overview: {
    ...tabCommonProps,
    id: "overview",
    title: "Market overview",
    content: <MarketOverview />,
  },
  trends: {
    ...tabCommonProps,
    id: "trends",
    title: "Trends",
    content: <Trends />,
  },
};

const initialLayout = {
  dockbox: {
    mode: "vertical",
    children: [
      {
        mode: "horizontal",
        size: 260,
        children: [
          {
            tabs: [tabsContents.news],
          },
          {
            tabs: [tabsContents.history],
          },
        ],
      },
      {
        size: 180,
        tabs: [tabsContents.cryptocurrencies],
      },
      {
        size: 260,
        mode: "horizontal",
        children: [
          {
            tabs: [tabsContents.overview],
          },
          {
            mode: "horizontal",
            tabs: [tabsContents.trends],
          },
        ],
      },
    ],
  },
};

function useDockData() {
  const { user } = useAppSelector((state) => state.auth);
  const [layout, setLayout] = useState<LayoutData>(initialLayout as LayoutData);
  const [isActive, setIsActive] = useState(false);

  const groups = useMemo(
    () => ({
      shared: {
        floatable: false,
        maximizable: isActive,
      },
    }),
    [isActive, user]
  );

  const loadTab = useCallback(
    ({ id }: TabBase) => tabsContents[id as keyof typeof tabsContents],
    [tabsContents]
  );

  const onLayoutChange = useCallback((newLayout: LayoutData) => {
    setLayout(newLayout);
  }, []);

  useEffect(() => {
    if (user) {
      setIsActive(true);
    } else {
      setIsActive(false);
      setLayout(initialLayout as LayoutData);
    }
  }, [user]);

  return {
    layout,
    groups,
    isActive,
    loadTab,
    onLayoutChange,
  };
}

export default useDockData;
