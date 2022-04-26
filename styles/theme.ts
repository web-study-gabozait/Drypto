import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#ffffff",
  subBackgroundColor: "#ffffff",
  backgroundColor2: "#ffffff",
  coinCardBg: "#f9fafb",
  contrast: "#000000",
  subContrast: "#ffffff",
  subText: "#dbdbdb",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#000000",
  subBackgroundColor: "#262626",
  backgroundColor2: "#494949",
  coinCardBg: "#262626",
  contrast: "#ffffff",
  subContrast: "#000000",
  subText: "#dbdbdb",
};
