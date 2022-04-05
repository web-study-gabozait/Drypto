import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ThemeProviderContainer from "../components/ThemeProviderContainer/ThemeProviderContainer";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProviderContainer Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
}

export default App;
