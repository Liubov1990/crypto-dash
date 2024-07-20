import { DefaultTheme } from "styled-components";

const defaultTheme = {
  sharedColors: {
    border: "rgba(255, 255, 255, 0.5)",
    textSecondary: "#868B93",
    price: "#9292C1",
    sortBackground: "rgba(26, 26, 29, 0.7)",
    stausUp: "#00C287",
    statusDown: "#E72D04",
    searchBackground: "#2F293E",
    searchText: "#E2D8FD",
    icon: "#8D8598",
    iconActive: "#D8BCFF",
    iconActiveBackground: "#372C44",
    accentColor: "#EC5EB7",
    accentLight: "#B783EB",
    userProfile: "#3F3655",
    btnIcon: "#ffffff",
    articleBackground: "#4A435C",
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
  textMain: "#ffffff",
};

const lightTheme = {
  mainBackground: "#ffffff",
  textMain: "#1A111D",
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
