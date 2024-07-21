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
        tabs: [getDockboxContent(false).news],
      },
      {
        tabs: [getDockboxContent(false).history],
      },
      {
        tabs: [getDockboxContent(false).cryptocurrencies],
      },
      {
        tabs: [getDockboxContent(false).overview],
      },
      {
        tabs: [getDockboxContent(false).trends],
      },
    ],
  },
};
