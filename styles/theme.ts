import { DefaultTheme } from "styled-components";
import { palette } from "./palette";

export const lightTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#ffffff",
};

export const darkTheme: DefaultTheme = {
  ...palette,
  backgroundColor: "#333333",
};
