import { useCallback, useMemo, useState } from "react";
import { LayoutData, TabBase } from "rc-dock";

const tabCommonProps = {
  minWidth: 240,
  minHeight: 180,
  group: "shared",
};

const tabsContents = {
  news: {
    ...tabCommonProps,
    id: "news",
    title: "News",
    content: <div>News</div>,
  },
  comparance: {
    ...tabCommonProps,
    id: "comparance",
    title: "Comparance graph",
    content: <div>Comparance graph content</div>,
  },
  cryptocurrencies: {
    ...tabCommonProps,
    id: "cryptocurrencies",
    title: "Cryptocurrencies",
    content: <div>Cryptocurrencies</div>,
  },
  overview: {
    ...tabCommonProps,
    id: "overview",
    title: "Market overview",
    content: <div>Market overview</div>,
  },
  trends: {
    ...tabCommonProps,
    id: "trends",
    title: "Trends",
    content: <div>Trends</div>,
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
            tabs: [tabsContents.comparance],
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
  const [layout, setLayout] = useState<LayoutData>(initialLayout as LayoutData);
  const [isActive, _setIsActive] = useState(true);

  const groups = useMemo(
    () => ({
      shared: {
        floatable: false,
        maximizable: isActive,
      },
    }),
    [isActive]
  );

  const loadTab = useCallback(
    ({ id }: TabBase) => tabsContents[id as keyof typeof tabsContents],
    [tabsContents]
  );

  const onLayoutChange = useCallback((newLayout: LayoutData) => {
    setLayout(newLayout);
  }, []);

  return {
    layout,
    groups,
    isActive,
    loadTab,
    onLayoutChange,
  };
}

export default useDockData;
