import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { THEME_KEY } from "../../constants/theme.constants";
import { ETheme } from "../../enum/theme/Theme.enum";
import { themeMode } from "../../store/theme";
import { darkTheme, lightTheme } from "../../styles/theme";
import local from "../../util/local";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeMode);

  const { LIGHT, DARK } = ETheme;

  const toggleChangeTheme = useCallback((): void => {
    const switchTheme = currentTheme === LIGHT ? DARK : LIGHT;
    local.set(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  const providerTheme = useMemo(() => {
    return currentTheme === LIGHT ? darkTheme : lightTheme;
  }, [currentTheme, LIGHT]);

  const theme = useMemo(() => {
    return currentTheme === LIGHT ? DARK : LIGHT;
  }, [DARK, LIGHT, currentTheme]);

  return { toggleChangeTheme, providerTheme, theme };
};

export default useTheme;
