import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/theme/useTheme";
import GlobalStyle from "../../styles/GlobalStyle";
import PageTemplate from "../common/PageTemplate";

const ThemeProviderContainer = ({ Component, pageProps }: any): JSX.Element => {
  const { providerTheme } = useTheme();

  return (
    <ThemeProvider theme={providerTheme}>
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
