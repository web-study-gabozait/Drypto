import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import CoinDetail from "../../components/coinDetail/CoinDetail";
import useCoin from "../../hooks/coinDetail/useCoin";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import { CoinDetail as CoinDetailType } from "../../types/common/common.type";

type Props = {
  isClient: boolean;
  coinData: CoinDetailType | null;
};

const CoinDetailPage: NextPage<Props> = ({ isClient, coinData }) => {
  // const { isLoading, data } = useCoin({ coinid: "btc-bitcoin" });

  // console.log(data);

  const { getCoinInfo } = useCoin();

  const [data, setData] = useState<CoinDetailType | null>(
    isClient ? null : coinData!
  );

  const getCoinPromise = useCallback(async () => {
    const data = await getCoinInfo("btc-bitcoin");
    setData(data);
  }, [getCoinInfo]);

  useEffect(() => {
    if (isClient) {
      getCoinPromise();
    }
  }, []);

  console.log(coinData);

  return (
    <div>
      {isClient ? "client" : "server"}
      <CoinDetail data={data} />
    </div>
  );
};

CoinDetailPage.getInitialProps = async ({ req }) => {
  const isServer = typeof window === "undefined";

  const getCoinInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      return null;
    }
  };

  if (isServer) {
    const coinData = await getCoinInfo("btc-bitcoin");

    return {
      coinData,
      isClient: false,
    };
  } else {
    return {
      coinData: null,
      isClient: true,
    };
  }
};

export default CoinDetailPage;
