import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#ffffff",
  subBackgroundColor: "#ffffff",
  coinCardBg: "#f9fafb",
  contrast: "#000000",
  subText: "#dbdbdb",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#000000",
  subBackgroundColor: "#262626",
  coinCardBg: "#262626",
  contrast: "#ffffff",
  subText: "#dbdbdb",
};
