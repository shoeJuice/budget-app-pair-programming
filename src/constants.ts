const Colors = {
  emerald: "#86CB92",
  mint: "#71B48D",
  yinMnBlue: "#404E7C",
  spaceCadet: "#251F47",
  darkPurple: "#260F26",
} as const;

const LegendPosition = {
  TOP: "top",
  BOTTOM: "bottom",
} as const;

export { Colors, LegendPosition };
export type ColorsType = typeof Colors;
export type LegendPositionType =
  (typeof LegendPosition)[keyof typeof LegendPosition];
