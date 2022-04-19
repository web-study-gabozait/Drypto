import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import CoinDetail from "../../components/coinDetail/CoinDetail";
import useCoin from "../../hooks/coinDetail/useCoin";
import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import { CoinDetail as CoinDetailType } from "../../types/common/common.type";

type Props = {
  isClient: boolean;
  coinData: CoinDetailType | null;
};

const CoinDetailPage: NextPage<Props> = ({ isClient, coinData }) => {
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

  return (
    <div>
      <Head>
        <title>{`Dtypto ${coinData ? coinData.name : "Coin"}`}</title>
        <meta
          name="description"
          content={
            coinData
              ? `${coinData}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
        <meta property="og:title" content={coinData ? coinData.name : "Coin"} />
        <meta
          property="og:description"
          content={
            coinData
              ? `${coinData}코인의 상세정보 사이트 입니다.`
              : `코인 상세정보 사이트 입니다.`
          }
        />
      </Head>

      <CoinDetail data={data} />
    </div>
  );
};

CoinDetailPage.getInitialProps = async () => {
  const isServer = typeof window === "undefined";

  const getCoinInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      toast.error("코인 상세정보 불러오기 실패");
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
