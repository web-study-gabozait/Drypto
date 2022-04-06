import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,

  backgroundColor: "#ffffff",
  contrast: "#000000",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#000000",
  contrast: "#ffffff",
};
