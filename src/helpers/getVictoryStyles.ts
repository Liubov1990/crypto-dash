export const getVictoryStyles = () => {
  const GREY_COLOR = "#868B93";
  const VIOLET_COLOR = "#372C44";
  const DARK_VIOLET_COLOR = "#261E35";
  const BLACK_RGBA_COLOR = "rgba(0, 0, 0, 0.8)";

  const axisCommon = {
    axis: { stroke: GREY_COLOR, strokeWidth: 1 },
    ticks: { stroke: GREY_COLOR, size: 4 },
    tickLabels: { fill: GREY_COLOR, fontSize: 10 },
  };

  return {
    chartMT: {
      marginTop: "15px",
    },

    axisMain: {
      ...axisCommon,
      grid: { stroke: 0 },
    },

    axisDependent: {
      ...axisCommon,
      grid: { stroke: VIOLET_COLOR },
    },

    flyoutTooltipStyle: {
      fill: BLACK_RGBA_COLOR,
    },

    candleStick: {
      data: {
        fillOpacity: 0.7,
        stroke: DARK_VIOLET_COLOR,
        strokeWidth: 1,
      },
    },
  };
};
