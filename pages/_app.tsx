import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ThemeProviderContainer from "../components/ThemeProviderContainer/ThemeProviderContainer";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
      <ThemeProviderContainer Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
}

export default App;
