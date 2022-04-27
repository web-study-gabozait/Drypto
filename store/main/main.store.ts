import { atom } from "recoil";
import { LOCAL_FAVORITES_KEY } from "../../constants/localStorage.contants";
import local from "../../util/local";

export const mainFavoriteAtom = atom<string[]>({
  key: "mainFavoriteAtom",
  default:
    local.get(LOCAL_FAVORITES_KEY) === null
      ? []
      : JSON.parse(local.get(LOCAL_FAVORITES_KEY) as string),
});

export const mainNewsAtom = atom<any[]>({
  key: "mainNewsAtom",
  default: [],
});
