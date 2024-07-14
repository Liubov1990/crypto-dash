import { DefaultTheme } from "styled-components";

const defaultTheme = {
  sharedColors: {
    border: "#CCE4FF",
    textSecondary: "#868B93",
    textTertiary: "#9292C1",
    sortBackground: "rgba(26, 26, 29, 0.7)",
    stausUp: "#00C287",
    statusDown: "#E72D04",
    searchBackground: "#2F293E",
    searchText: "#E2D8FD",
    icon: "#8D8598",
    iconActive: "#D8BCFF",
    iconActiveBackground: "#372C44",
  },

  fonts: {
    interRefular: "Inter-Regular",
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

  transitionTime: {
    quick: "0.2s ease-out",
  },
};

const darktheme = {
  mainBackground: "#261E35",
  cardBackground: "#3C354A",
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
