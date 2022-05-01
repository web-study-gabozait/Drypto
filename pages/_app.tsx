import type { AppProps, AppContext } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as ga from "../lib/ga/gtag";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import ThemeProviderContainer from "../components/ThemeProviderContainer/ThemeProviderContainer";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProviderContainer Component={Component} pageProps={pageProps} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export const getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};

export default App;
