import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/theme/useTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import PageTemplate from "../common/PageTemplate";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
