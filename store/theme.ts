import { atom } from "recoil";
import { ETheme } from "../enum/theme/Theme.enum";

export const themeMode = atom<ETheme>({
  key: "themeMode",
  default : 
});
