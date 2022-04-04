import { atom } from "recoil";
import { ETheme } from "../enum/theme/Theme.enum";
import { getTheme } from "../util/getTheme";

export const themeMode = atom<ETheme>({
  key: "themeMode",
  default: getTheme(),
});
