import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/theme/useTheme";
import GlobalStyle from "../../styles/GlobalStyle";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
