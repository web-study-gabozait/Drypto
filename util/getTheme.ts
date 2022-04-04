import { THEME_KEY } from "../constants/theme.constants";
import local from "./local";
import { ETheme } from "../enum/theme/Theme.enum";

export const getTheme = (): ETheme => {
  const theme = local.get(THEME_KEY);

  //localStorage에 theme 이 없을때
  if (typeof window !== "undefined" && theme === null) {
    const isDarkTheme = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  //localStorage에 theme 이 있을때
  if (theme === ETheme.DARK) {
    return ETheme.DARK;
  }

  return ETheme.LIGHT;
};
