import { DefaultTheme } from "styled-components";

const defaultTheme = {
  sharedColors: {
    border: "#CCE4FF",
    textMain: "#ffffff",
    textSecondary: "#868B93",
    textTertiary: "#9292C1",
    sortBackground: "#1A111D",
    stausUp: "#00C287",
    statusDown: "#E72D04",
    searchBackground: "#2F293E",
    searchText: "#E2D8FD",
    icon: "#8D8598",
    iconActive: "#D8BCFF",
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
};

const darktheme = {
  mainBackground: "#261E35",
  cardBackground: "#3C354A",
};

const lightTheme = {
  mainBackground: "#ffffff",
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
