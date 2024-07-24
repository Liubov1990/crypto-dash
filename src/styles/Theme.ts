import { DefaultTheme } from "styled-components";

const defaultTheme = {
  sharedColors: {
    textSecondary: "#868B93",
    price: "#9292C1",
    sortBackground: "rgba(26, 26, 29, 0.7)",
    selectBorder: "rgba(26, 26, 29, 0)",
    dropIndicator: "rgba(0, 0, 0, 0.7)",
    stausUp: "#00C287",
    statusDown: "#E72D04",
    searchBackground: "#2F293E",
    searchText: "#E2D8FD",
    icon: "#8D8598",
    iconActive: "#D8BCFF",
    btnIcon: "#ffffff",
    accentColor: "#EC5EB7",
    accentLight: "#B783EB",
    trendHeading: "#BFB7B7",
    trendCurrencyName: "#9A9A9A",
  },

  fonts: {
    interRegular: "Inter-Regular",
    interMedium: "Inter-Medium",
    interSemiBold: "Inter-SemiBold",
    interBold: "Inter-Bold",
  },

  borderRadius: {
    extraSmall: "10px",
    small: "13px",
    medium: "15px",
    large: "20px",
    circle: "50%",
  },

  fontSize: {
    small: ".625rem",
    medium: "0.875rem",
  },

  transitionTime: {
    quick: "0.2s ease-out",
  },
};

const darktheme = {
  mainBackground: "#261E35",
  boxBackground: "#3C354A",
  boxInnerBackground: "#4A435C",
  textMain: "#ffffff",
  userProfile: "#3F3655",
  iconActiveBackground: "#372C44",
  border: "rgba(255, 255, 255, 0.5)",
};

const lightTheme = {
  mainBackground: "#e0e0e0",
  boxBackground: "#f5f5f5",
  boxInnerBackground: "#a7a7a7",
  textMain: "#1A111D",
  userProfile: "#a7a7a7",
  iconActiveBackground: "#a7a7a7",
  border: "#a7a7a7",
};

const theme: DefaultTheme = {
  dark: {
    color: darktheme,
    ...defaultTheme,
  },

  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
