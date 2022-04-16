import { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import CoinDetail from "../../components/coinDetail/CoinDetail";
import { useCoin } from "../../hooks/coinDetail/useCoin";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";

const CoinDetailPage: NextPage = () => {
  const { isLoading, data } = useCoin({ coinid: "btc-bitcoin" });

  console.log(data);

  return <CoinDetail />;
};

CoinDetailPage.getInitialProps = async (ctx) => {
  const isServer = typeof window;

  if (isServer) {
    const queryClient = new QueryClient();

    const coinid = "btc-bitcoin";

    await queryClient.prefetchQuery("coinDetail", () =>
      coinDetailRepository.getCoin({ coinid })
    );

    return {
      props: {
        dehydrateState: dehydrate(queryClient),
      },
    };
  }
};

export default CoinDetailPage;
