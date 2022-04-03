import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={() => {}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
