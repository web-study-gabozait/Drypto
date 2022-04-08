import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#ffffff",
  coinCardBg: "#f9fafb",
  contrast: "#000000",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#000000",
  coinCardBg: "#262626",
  contrast: "#ffffff",
};
