import { useRecoilState } from "recoil";
import { THEME_KEY } from "../../constants/theme.constants";
import { ETheme } from "../../enum/theme/Theme.enum";
import { themeMode } from "../../store/theme";
import { darkTheme, lightTheme } from "../../styles/theme";
import local from "../../util/local";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeMode);

  const { LIGHT, DARK } = ETheme;

  const toggleChangeTheme = (): void => {
    const switchTheme = currentTheme === LIGHT ? DARK : LIGHT;
    local.set(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  };

  const theme = currentTheme === LIGHT ? darkTheme : lightTheme;

  return { toggleChangeTheme, theme };
};

export default useTheme;
