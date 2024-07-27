import { getDockboxContent } from "../helpers/getDockboxContent";

export const DOCKBOX_DESKTOP = {
  dockbox: {
    mode: "vertical",
    children: [
      {
        mode: "horizontal",
        size: 260,
        children: [
          {
            tabs: [getDockboxContent().news],
          },
          {
            tabs: [getDockboxContent().history],
          },
        ],
      },
      {
        size: 180,
        tabs: [getDockboxContent().cryptocurrencies],
      },
      {
        size: 260,
        mode: "horizontal",
        children: [
          {
            tabs: [getDockboxContent().overview],
          },
          {
            mode: "horizontal",
            tabs: [getDockboxContent().trends],
          },
        ],
      },
    ],
  },
};

export const DOCKBOX_MOBILE = {
  dockbox: {
    mode: "vertical",
    children: [
      {
        tabs: [
          getDockboxContent(false).trends,
          getDockboxContent(false).news,
          getDockboxContent(false).history,
          getDockboxContent(false).overview,
          getDockboxContent(false).cryptocurrencies,
        ],
      },
    ],
  },
};
